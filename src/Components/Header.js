import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="justify-content-center">
                    <Navbar.Brand >ToDo App</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

