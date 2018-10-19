import React, { Component } from 'react'
import './App.css'
import Camera from './camera'
import Slideshow from './slideshow'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Camera />
        <Slideshow />
      </div>
    )
  }
}


export default App
