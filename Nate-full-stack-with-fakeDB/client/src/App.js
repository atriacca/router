import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            turtles: [],
            turtleName: ""
        }
    }

    componentDidMount(){
        axios.get("/turtles").then(response => {
            this.setState({
                turtles: response.data
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }    

    handleSubmit = e => {
        e.preventDefault()

        const newTurtle = {
            name: this.state.turtleName
        }

        axios.post("/turtles", newTurtle)
            .then(response => {
                this.setState({
                    turtles: response.data,
                    turtleName: ""
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                { this.state.turtles.map(turtle => <h1 key={turtle.name}>{turtle.name}</h1>) }

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        onChange={this.handleChange} 
                        value={this.state.turtleName} 
                        name="turtleName" 
                        placeholder="Turtle Name"/>
                    <button>Add New Turtle</button>
                </form>

            </div>
        )
    }
}

export default App