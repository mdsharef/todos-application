import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

const FilterController = ({ filter, handleFilter }) => {
    return (
        <ButtonGroup>
            <Button color={filter === 'all'? 'info': 'secondary'} onClick={ ()=> handleFilter('all') }>
                All
            </Button>
            <Button color={filter === 'running'? 'info': 'secondary'} onClick={ ()=> handleFilter('running') }>
                Running
            </Button>
            <Button color={filter === 'completed'? 'info': 'secondary'} onClick={ ()=> handleFilter('completed') }>
                Completed
            </Button>
        </ButtonGroup>
    )
}

FilterController.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired
}

export default FilterController;