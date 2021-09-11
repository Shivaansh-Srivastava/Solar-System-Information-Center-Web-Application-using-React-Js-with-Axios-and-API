import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Planet from './planet';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      info: [],
      moons:[],
      mass:[],
      display: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClick(event){
    const planet = this._name.value
    axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
    .then(response => {
      console.log(response.data)
      console.log(response.data.mass)
      console.log(response.data.moons)
      this.setState({
        info: response.data,
        display: true,
        mass: response.data.mass,
        moons: response.data.moons
      })
    })
  }

  handleClear(event){
    this._name.value=""
    this.setState({
      info:[],
      display: false,
      mass:[],
      moons:[]
    })
  }

  render(){
    return(
      <div>
        <div className="main-title">
          <h1>Solar System Information Center</h1>
          <div className="search-box">
          <input type="text" ref={value => this._name=value} placeholder="Search..." />
          <button onClick={this.handleClick}>Search</button>
          <button onClick={this.handleClear}>Clear</button>
          </div>
        </div>
        <div className="info column">
        {this.state.display?<Planet info={this.state.info} mass={this.state.mass} moons={this.state.moons}/>:<h1> </h1>}
        </div>
      </div>
      
    )
  }
}

export default App;
