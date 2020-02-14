import React, { Component } from 'react'
import './App.css'
import Login from "./Components/Login"
import {  AppBar, Toolbar, } from "@material-ui/core"
import Dashboard from './Components/Dashboard'

class App extends Component {
  state = {
    loggedIn: false,
    online: true,
    notification: '',
    volume: 0
  }
 
  render() {
    return (
      <div className="App">
        <AppBar style={{ background: "green" }} position="staic">
          <Toolbar>My Music App</Toolbar>
        </AppBar>
        {
          this.state.loggedIn ?
          <Dashboard
          checked={this.state.online}
          toggleOnline={this.toggleOnline}
          volume={this.state.volume}
          changeVolume={this.changeVolume}
          /> : <Login onSubmit={this.login}/>}
      </div>
    )
  }
}

export default App
