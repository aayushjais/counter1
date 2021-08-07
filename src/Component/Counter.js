import React, { Component } from 'react';

class Counter extends Component {

  constructor(props){
    super(props);
     this.state = {
        counter:0
     };
   }

  increment(){
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement(){
      if(this.state.counter === 0){
        this.setState({
            counter:0
        });
      }else {
        this.setState({
            counter: this.state.counter - 1
        });
      }
  }


  render() {
    return (
        <div>
            <h1 style={{ marginLeft:"600px", marginTop:"200px"}}>Counter</h1>
            <div style={{ marginLeft:"650px", marginTop:"50px"}}><h2> {this.state.counter}</h2></div>
            <button type="button" className="btn btn-success"  onClick={this.increment.bind(this)} style={{marginLeft:"530px", marginTop:"30px"}}>Add Count</button>
            <button type="button" className="btn btn-danger"  onClick={this.decrement.bind(this)} style={{marginLeft:"30px", marginTop:"30px"}}>Lower Count</button> 
      </div>
    );
  }
}

export default Counter;