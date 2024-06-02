import React, { Component } from 'react'

export default class Employee extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
        
    }

  render() {
    return (
      <div>Employee
        {this.state.count}

        <button onClick={()=>this.setState((prevState)=>({count:prevState.count+1}))}>Increment Count</button>
      </div>
      

    )
  }
}
