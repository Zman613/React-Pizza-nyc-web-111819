import React from "react"

class PizzaForm extends React.Component {

  state = {
    topping: '',
    size: '',
    vegetarian: false,
    id: null
  }

  handleChange = (e) => {
    let value
    if (e.target.value === 'true'){
      value = true
    } else if (e.target.value === 'false'){
      value = false
    } else {
      value = e.target.value
    }
    this.setState({
      [e.target.name]: value
    })
  }

  componentDidUpdate(prevState){
    if (prevState.id !== this.props.id){
      this.setState({
        topping: this.props.topping,
        size: this.props.size,
        vegetarian: this.props.vegetarian,
        id: this.props.id
      })
    }
  }

  render(){

    return(
        <div className="form-row">
          <div className="col-5">
              <input onChange={this.handleChange} type="text" name='topping' className="form-control" placeholder="Pizza Topping" value={
                  //Pizza Topping Should Go Here
                  this.state.topping
                }/>
          </div>
          <div className="col">
            <select onChange={this.handleChange} name='size' value={this.state.size} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input onChange={this.handleChange} name='vegetarian' className="form-check-input" type="radio" value={true} checked={this.state.vegetarian}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input onChange={this.handleChange} name='vegetarian' className="form-check-input" type="radio" value={false} checked={!this.state.vegetarian}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={() => this.props.updatePizza(this.state)}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
