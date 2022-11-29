import React from "react";
import PropTypes from 'prop-types';
import { Input, Button, Table } from 'reactstrap';

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <tr>
            <th>
                <Input
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelected}
                    onChange={() => toggleSelect(todo.id)}
                />
            </th>
            <th>
                {todo.time.toDateString()}
            </th>
            <th>
                {todo.text}
            </th>
            <div>
                <Button
                    color={todo.isCompleted ? 'danger' : 'success'}
                    onClick={()=> toggleComplete(todo.id)}
                >
                    {todo.isCompleted ? 'Completed' : 'Running'}
                </Button>
            </div>
        </tr>
    )
}

RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect:  PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <RowItem 
                        key={todo.id}
                        todo={todo}
                        toggleSelect={toggleSelect}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </tbody>
        </Table>
    )
}

TableView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect:  PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default TableView;