import React from "react"

const DogItem = (props) => {
	return (<span onClick={() => props.clickHandler(props.oneDog)}>{props.oneDog.name}</span>)
}

export default DogItem
