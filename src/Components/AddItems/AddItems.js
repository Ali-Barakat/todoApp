import React, { Component } from 'react';
import './AddItems.css'

class AddItems extends Component{

    state ={
        name: '',
        age: ''
    }


    handleChange = (e)=>{
        this.setState({
            [e.target.id] : [e.target.value]
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addItem(this.state)
    }




    // handleChange = (e) =>{
    //     this.setState({
    //         [e.target.id] : e.target.value
    //     })
    // }

    // handleSubmit = (e) =>{
    //     e.preventDefault()
    //     this.props.addItem(this.state)
    // }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter your name" id='name' onChange={this.handleChange} />
                <input type="number" placeholder="enter your age" id='age' onChange={this.handleChange} />
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default AddItems;