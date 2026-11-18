import PlantCard from "./PlantCard.tsx";
import {Plant} from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import {Activity, useState} from "react";

// function AppAtRuntimeFalsch() {
// 	return  React.createElement("PlantCard",
// 		{
// 			name:"Rose"
// 		},
// 		undefined
// 	);
// 	React.createElement("PlantCard",
// 		{
// 			name:"Aloe Vera"
// 		},
// 		undefined
// 	);
//
// function AppAtRuntime()
//   return React.createElement("Fragment",
// 		{},
// 		  React.createElement("PlantCard",
// 	      {
// 	        name:"Rose"
//         },
// 	      undefined
// 			),
// 	)
// }

const allPlants: Plant[] = [
	{
		id: "1",
		name: "Aloe Vera",
		location: "Schlafzimmer",
		wateringInterval: 12,
		lastWatered: "2025-06-16",
	},
	{
		id: "2",
		name: "Orchidee",
		location: "Wohnzimmer",
		wateringInterval: 1,
	},
	{
		id: "3",
		name: "Grüne Monstera",
		location: "Wohnzimmer",
		wateringInterval: 7,
		lastWatered: "2025-06-20",
	},
];

// State bzw. Zustand (<-- Model)

export default function App() {

	const [intervalSelectorVisible, setIntervalSelectorVisible] = useState(true);
	const [value, setValue] = useState(0);

	return (
		<div className={"AppContainer"}>
			<button type="button" className={"primary"} onClick={() => setIntervalSelectorVisible(!intervalSelectorVisible)}>
				Ein-/Ausblenden
			</button>
			<button type="button"  className={"primary"}  onClick={() => setValue(value+1)}>Inkrement {value}</button>
			{intervalSelectorVisible ? <IntervalSelector /> : null}

			{/*<Activity mode={intervalSelectorVisible ? "visible" : "hidden"}>*/}
			{/*  <IntervalSelector />*/}
			{/*</Activity>*/}

			{/*<div style={intervalSelectorVisible ? undefined: {display: "none"}}>*/}
			{/*	<IntervalSelector />*/}
			{/*</div>*/}

			{/*{ intervalSelectorVisible && <IntervalSelector /> }*/}
			{/*<PlantCardList plants={allPlants} />*/}
      {/*<PlantCard name={"Rose"}*/}
      {/*           location={"Küche"}*/}
      {/*           wateringInterval={1}*/}
      {/*/>*/}

      {/*<PlantCard name={"Aloe Vera"}*/}
      {/*           location={"Schlafzimmer"}*/}
      {/*           wateringInterval={7}*/}
      {/*           lastWatered={"2026-11-16"}*/}
      {/*/>*/}
		</div>

   )
}
