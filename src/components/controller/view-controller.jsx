import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'reactstrap';

const ViewController = ({ view, changeView }) => {
    return (
        <div className='d-flex'>
            <Label for='list-view' className='me-4'>
                <Input 
                    type='radio'
                    value='list'
                    name='view'
                    id='list-view'
                    onChange={changeView}
                    checked={view === 'list'}
                    className='d-inline-block me-2'
                />
                List view
            </Label>
            <Label for='table-view' className='me-4'>
                <Input 
                    type='radio'
                    value='table'
                    name='view'
                    id='table-view'
                    onChange={changeView}
                    checked={view === 'table'}
                    className='d-inline-block me-2'
                />
                Table view
            </Label>
        </div>
    )
}

ViewController.propTypes = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
}

export default ViewController;