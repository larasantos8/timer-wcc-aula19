import React, { Component } from 'react';

class Timer extends Component{ 
        state = {
            timer: new Date()
        }
    

    componentDidMount(){
        this.newTime = setInterval(
            () => this.setState({timer: new Date()}),1000)
    }

    componentDidUpdate = (_, prevState) => {
        if (this.state.timer !== prevState.timer){
            console.log("componentDidUpdate", "O horário mudou!")
        }
    }

    componentWillUnmount(){
        clearInterval(this.state.timer)
    }

    render(){
        return( 
        <div>
            <h1>Relógio</h1>
            <h2> {this.state.timer.toLocaleTimeString()}</h2>
        </div>
        )
     }
   
}

export default Timer
