import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      id: Date.now(),
      item: '',
      editItem: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      //status: this.state.status,
      status: false,
      dt: new Date().toLocaleString()
    };
    const updatedItems = [...this.state.items, newItem];
    
    this.setState({
      items: updatedItems,
      item: "",
      id: Date.now(),
      status: false,
      editItem: false
    });

  };
  clearList = () => this.setState({
    items: []
  });
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);
    const selectedItem = this.state.items.find(item =>
      item.id === id)

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };

  handleDone = (items, id)=> {
    this.setState(items.filter(item => {
        if (item.id === id) {
            item.status = !item.status;
        }
        return item;
    }))
}

  render() {

    return (

        <Container className="my-5">
          <Row className="justify-content-center">

          <Col xl="6" lg="7" md="9" className="bg-dark">
            <Col md="8" className="my-5 mx-auto">
            <h2 className="text-capitalize text-center text-white">ToDo</h2>
            </Col>

            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleDone={this.handleDone}
            />
          </Col>

          </Row>
        </Container>
    );
  }
}
