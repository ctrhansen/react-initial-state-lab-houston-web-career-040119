// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {

        const countdown = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`    

        return(
            <div>{countdown}</div> 
        )
    }
  
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    //     this.state = {
    //         color: this.props.value
    //     }
    // }

    // changeColor = () => {
    //     {this.setState({color: '#333'})}
    // }

    // render() {
    //     return (
    //         <div className='cell' 
    //             style={{backgroundColor: this.state.color}} 
    //             onClick={() => this.changeColor()}>
    //         </div>
    //     )
    }