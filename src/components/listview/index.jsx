import React from 'react';
import { ListGroup, ListGroupItem, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types'

// listItem contents: -
// 1. id
// 2. text
// 3. description
// 4. time
// 5. isCompleted
// 6. isSelected

// list item component
const ListItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <ListGroupItem className="d-flex align-items-center">
            <Input
                type="checkbox"
                id={todo.id}
                checked={todo.isSelected}
                onChange={()=> toggleSelect(todo.id)}
            />
            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button
                className="ms-auto"
                color={todo.isCompleted ? 'danger' : 'success'}
                onClick={()=> toggleComplete(todo.id)}
            >
                {todo.isCompleted? 'Completed' : 'Running'}
            </Button>
        </ListGroupItem>
    )
}

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect:  PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
    return (
        <ListGroup>
            {todos.map(todo => (
                <ListItem 
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ListGroup>
    )
}

ListView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect:  PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView;