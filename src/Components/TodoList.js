import React, { Component } from 'react'
import TodoItem from './TodoItem';
import { Button, Card, ListGroup } from 'react-bootstrap';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit, handleDone } = this.props;
        return (
            <Card className="mb-5">
                <Card.Body>
                    <ListGroup>
                        <h3 className="text-capitalize text-center">List</h3>
                        {items.map((item,idx )=> {
                            return (
                                <TodoItem
                                    key={item.id}
                                    title={item.title}
                                    statusDone={item.status}
                                    dt={item.dt}
                                    handleDelete={() => handleDelete(item.id)}
                                    handleEdit={() => handleEdit(item.id)}
                                    handleDone={() => handleDone(items,item.id)}
                                />
                            );
                        })}
                        <Button variant="danger" size="md" type="button" className="mt-3"
                            onClick={clearList} >
                                Clear List
                        </Button>
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }
}
