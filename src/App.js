import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }


  componentDidMount () {
    //1.
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))

    // // 2. using axios
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   // .then(res => res.data)
    //   .then(({ data }) => this.setState({ monsters: data }))
  }

  render () {
    return (
      <div className="App">
        {
          this.state.monsters.map(
            monster => <h1>{monster.name}</h1>
          )
        }
      </div>
    )
  }
}

export default App;
