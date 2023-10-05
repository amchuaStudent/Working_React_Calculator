import React, { Component } from "react";
import './App.css';
import { Button } from "./components/Button";
import { Input } from  "./components/Input";
import { ClearButton }  from './components/Clearbutton';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      input: "",
      num1: "",
      num2: "",
      toggleNum: "1",
      operatorTog: "",
      ansToNum1: 0
    }
  }
  conditionalState = con => {
    if (con === "+"){
      this.setState({operatorTog: "+", toggleNum: "2"});
      if (this.state.ansToNum1 === 1){
        this.setState({num1: this.state.input})
      }
    }
    if (con === "-"){
      this.setState({operatorTog: "-", toggleNum: "2"});
      if (this.state.ansToNum1 === 1){
        this.setState({num1: this.state.input})
      }
    }
    if (con === "/"){
      this.setState({operatorTog: "/", toggleNum: "2"});
      if (this.state.ansToNum1 === 1){
        this.setState({num1: this.state.input})
      }
    }
    if (con === "X"){
      this.setState({operatorTog: "X", toggleNum: "2"});
      if (this.state.ansToNum1 === 1){
        this.setState({num1: this.state.input})
      }
    }
    if (this.state.toggleNum === "1"){
      this.setState({num1: this.state.num1 + con});
    }
    if (this.state.toggleNum === "2" && con !== "+" && con !== "-" && con !== "/" && con !=="X"){
      this.setState({num2: this.state.num2 + con});
    }
  }
  
 
    resetSwi = () => {
      this.setState({toggleNum:"1", operatorTog: "", num1: "", num2: "", ansToNum1: 0});
  }

  operatorTog = () => {
    if(this.state.operatorTog === "+"){
      this.setState({input: parseFloat(this.state.num1) + parseFloat(this.state.num2), ansToNum1: 1, num2:""});
    }
    if(this.state.operatorTog === "-"){
      this.setState({input: parseFloat(this.state.num1) - parseFloat(this.state.num2), ansToNum1: 1, num2:""});
    }
    if(this.state.operatorTog === "/"){
      this.setState({input: parseFloat(this.state.num1)  / parseFloat(this.state.num2), ansToNum1: 1, num2:""});  
    }
    if(this.state.operatorTog === "X"){
      this.setState({input: parseFloat(this.state.num1) * parseFloat(this.state.num2), ansToNum1: 1, num2:""});
    }
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
    this.conditionalState(val);
   
  }

  clearInput = () => {
    this.resetSwi();
    this.setState({input: ""});
  }

  equalAns = () => {
    this.operatorTog();
  }

  fullName = () => {
    this.setState({input: "Angelo Miguel Chua"})
    this.resetSwi();
  }
  render(){
    return (<div className="app">

      <h1>Calculator of Angelo Miguel Chua - CPE3A</h1>

      <div className="calc-wrapper">
        <Input input={this.state.input}/>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>X</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={this.equalAns}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
        </div>
        <div className="row">
          <Button handleClick={this.fullName}>CHUA</Button>
        </div>
      </div>
    </div>);
  }
}

export default App;
