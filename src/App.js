import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    pizza: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(pizzas => {
      this.setState({pizzas})
    })
  }

  pizzaToEdit = (id) => {
    let pizza = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({pizza})
  }

  updatePizza = (pizza) => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(pizza)
    })
    .then(response => response.json())
    .then(pizza => {
      let pizzas = this.state.pizzas.map(p => {if(p.id === pizza.id){p = pizza} return p})
      this.setState({pizzas})
    })
    .catch(error => {alert(error.message)})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm {...this.state.pizza} updatePizza={this.updatePizza}/>
        <PizzaList pizzas={this.state.pizzas} pizzaToEdit={this.pizzaToEdit}/>
      </Fragment>
    );
  }
}

export default App;

