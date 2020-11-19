import React, { Component } from 'react'
import './App.css';
import CardList from './Components/CardList'
import SearchComponent from './Components/SearchComponent'

 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monsters: [],
       searchField: ''
    };
  }

  componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({monsters: users}));
   }
  
  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchComponent placeholder="search monsters" handleChange= {e => this.setState ({searchField: e.target.value})}/>
        <CardList monsters = {filteredMonsters}/>
      </div>
    )
  }
}

export default App
