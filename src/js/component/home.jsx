import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Digit} from "./digits.jsx"

//create your first component
const Home = (props) => {

	console.log('this is the time', props)

	return (
		<main className="text-center bg-dark d-flex justify-content-evenly">
			<Digit number={<i class="fa-solid fa-clock fa-beat"></i>}/>
			<Digit number={Math.floor(props.timer / 100000) % 100000}/>
			<Digit number={Math.floor(props.timer / 10000) % 10000}/>
			<Digit number={Math.floor(props.timer / 1000) % 1000}/>
			<Digit number={Math.floor(props.timer / 100) % 100}/>
			<Digit number={Math.floor(props.timer / 10) % 10}/>
			<Digit number={props.timer % 10}/>

		</main>
	);
};

export default Home;
