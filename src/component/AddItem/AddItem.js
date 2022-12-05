import React, { Component } from "react";
import "./AddItem.css";

class AddItems extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState ({
      [e.target.id]: e.target.value,
    }) 
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value==='') {
        return false
      }else{
          // console.log(this.state);
          this.props.addItem(this.state)
          this.setState ({
            name: "",
            age: ""
          })
        }

  
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        
            
            <input
              type="text"
              id="name"
              placeholder="Type your name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="number"
              id="age"
              placeholder="Type your age"
              onChange={this.handleChange}
              value={this.state.age}
            />
            <input type="submit" value="add" />
          
        </form>
      </div>
    );
  }
}

export default AddItems;
