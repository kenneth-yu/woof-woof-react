import React from "react"

const DogInfo = (props) => {
		const goodDogColor = props.selectedDog.isGoodDog ? "yellow" : "red"
		const imgStyle = {
			boxShadow: `0 0 30px 15px ${goodDogColor}, 0 0 50px 15px ${goodDogColor}, 0 0 75px 45px ${goodDogColor}`
		}

		return (
			<div id="dog-info">
				<img src={props.selectedDog.image} style={imgStyle} alt="pup pup"/>
				<h2>{props.selectedDog.name}</h2>
				<button onClick={props.isGoodDogHandler}>{props.selectedDog.isGoodDog ? "Good Dog" : "Bad Dog"}</button>
			</div>
		)

}

export default DogInfo
