import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    updateAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    print = () => {
        console.log("name: " + this.state.name + "  age:  " + this.state.age)
    }

    render() {
        return (
            <div>
                <input id="name-input-ex1" value={this.state.name} onChange={this.updateName} />
                <input id="age-input" value={this.state.age} onChange={this.updateAge} />
                <button onClick={this.print}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;