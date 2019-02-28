import React from "react"
import DogItem from "./DogItem"


const DogList = (props) => {
	let doggoList = props.allDogs.map(oneDog => <DogItem clickHandler={props.clickHandler} key={oneDog.id} oneDog={oneDog}/>)
	return (
    <div id="dog-list">
	  {doggoList}
    </div>
  )
}

export default DogList
