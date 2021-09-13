import React, { Component } from 'react'
import { Button, InputGroup, Form, Card } from 'react-bootstrap';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } =
            this.props;
        return (
            <Card className="mb-5">
                <Card.Body>

                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className="bg-primary text-white" id="basic-addon1">
                                <i className="fas fa-thumbtack" />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                className="text-capitalize"
                                value={item}
                                onChange={handleChange}
                                placeholder="Write your tasks..."
                                aria-label="task"
                                aria-describedby="basic-addon1"
                                autoFocus="true"
                            />
                        </InputGroup>
                        <div className="d-grid gap-2">
                            <Button variant={editItem ? "success" : "primary"} size="md" type="submit" disabled={item ? false : true}>
                                {editItem ? 'Edit' : 'Add'}
                            </Button>
                        </div>
                    </Form>

                </Card.Body>
            </Card>
        )
    }
}
