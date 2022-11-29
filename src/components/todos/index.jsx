import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import shortid from 'shortid';

import ListView from '../listview';
import TableView from '../tableview';
import Controller from '../controller';
import CreateTodoForm from '../create-todo-form';

class Todos extends React.Component {

    state = {
        todos: [
            {
                id: '23dhdjhas23',
                text: 'todo 1',
                description: 'fhakdkfhk',
                time: new Date(),
                isSelected: false,
                isCompleted: false
            },
            {
                id: '23dh8743has23',
                text: 'task 2',
                description: 'fhakdfdsfhk',
                time: new Date(),
                isSelected: false,
                isCompleted: false
            },
            {
                id: '23hsaj8743has23',
                text: 'Another work',
                description: 'fhakdsdfgsfhk',
                time: new Date(),
                isSelected: false,
                isCompleted: false
            }
        ],
        searchTerm: '',
        isOpenCreateTodoForm: false,
        view: 'list',
        filter: 'all'
    }

    toggleSelect = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isSelected = !todo.isSelected;

        this.setState({ todos });
    }

    toggleComplete = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isCompleted = !todo.isCompleted;

        this.setState({ todos });
    }

    handleSearch = (value) => {
        this.setState({ searchTerm: value })
    }

    toggleForm = () => {
        this.setState({
            isOpenCreateTodoForm: !this.state.isOpenCreateTodoForm
        })
    }

    createTodo = todo => {
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isCompleted = false;
        todo.isSelected = false;

        const todos = [todo, ...this.state.todos];
        this.setState({todos});
        this.toggleForm();
    }

    handleFilter = (value) => {
        this.setState({ filter: value})
    }

    changeView = (event) => {
        this.setState({ view: event.target.value });
    }

    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelected);
        this.setState({ todos })
    }

    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isCompleted)
        this.setState({ todos })
    }

    reset = () => {
        this.setState({
            searchTerm: '',
            isOpenCreateTodoForm: false,
            view: 'list',
            filter: 'all'
        })
    }

    performSearch = () => {
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    performFilter = todos => {
        const { filter } = this.state;
        if(filter === 'completed') {
            return todos.filter(todo => todo.isCompleted)
        } else if(filter === 'running') {
            return todos.filter(todo => !todo.isCompleted)
        } else {
            return todos
        }
    }

    getView = () => {
        let todos = this.performSearch();
        todos = this.performFilter(todos);
        return this.state.view === 'list' ? (
            <ListView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ) : (
            <TableView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        )
    }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Adda Todo Application</h1>
                <Controller 
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    filter={this.state.filter}
                    handleFilter={this.handleFilter}
                    view={this.state.view}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                <div>
                    {this.getView()}
                </div>
                <Modal
                    isOpen={this.state.isOpenCreateTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm 
                            createTodo={this.createTodo}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos;