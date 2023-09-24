import React, { Component } from "react";
import './App.css';
import { Button } from "./components/Button";
import { Input } from  "./components/Input";
import { ClearButton }  from './components/Clearbutton';

class App extends Component {
  render(){
    return (<div className="app">

      <h1>This is my Calculator</h1>

      <div className="calc-wrapper">
        <Input input={1}/>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>X</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
        </div>
      </div>
    </div>);
  }
}

export default App;
