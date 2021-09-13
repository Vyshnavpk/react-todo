import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit, handleDone, statusDone,dt } = this.props;
        return (
            <ListGroup.Item className={statusDone ?"bg-success d-flex justify-content-between my-2":"d-flex justify-content-between my-2"}>

                <h6 className={statusDone ?"text-capitalize text-decoration-line-through":"text-capitalize"}>{title}</h6>

                <ListGroup horizontal>
                    <small className="mr-2">{dt}</small>
                    <span className="mx-2 text-dark" onClick={handleEdit}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                    <span className="mx-2 text-info" onClick={handleDone}>
                        <i className={statusDone ? "fas fa-undo":"fas fa-check"}></i>
                    </span>
                </ListGroup>

            </ListGroup.Item>
        );
    }
}
