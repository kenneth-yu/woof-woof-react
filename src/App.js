import React, { Component } from 'react';

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {
  state = {
    allDogs: [],
    selectedDog:{}
  }

  componentDidMount(){
    fetch('http://localhost:3001/dogs')
    .then(res => res.json())
    .then(data => this.setState({
      allDogs: data,
      selectedDog: data[0]
    }))
  }

  clickHandler = (dogObj) => {
    this.setState({
      selectedDog: dogObj
    })
  }



  isGoodDogHandler = () => {

    this.state.selectedDog.isGoodDog = !this.state.selectedDog.isGoodDog

    fetch(`http://localhost:3001/dogs/${this.state.selectedDog.id}`,{
      method: 'PATCH',
      body: JSON.stringify({
        isGoodDog: this.state.selectedDog.isGoodDog
      }),
      headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(res => res.json()).then(data => this.setState({
          selectedDog: data
        }))
    // this.state.selectedDog.isGoodDog = !this.state.selectedDog.isGoodDog

  }
  render() {
    let allDogsInfo = this.state.allDogs.map(oneDog => <DogInfo oneDog={oneDog}/>)
    return (
      <div>
        <DogList clickHandler={this.clickHandler} allDogs={this.state.allDogs}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <DogInfo isGoodDogHandler={this.isGoodDogHandler} selectedDog={this.state.selectedDog}/>
        </div>
      </div>
    );
  }
}

export default App;
