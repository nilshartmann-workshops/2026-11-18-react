import PlantCard from "./PlantCard.tsx";
import {Plant} from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";

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


export default function App() {
	return (
		<div className={"AppContainer"}>
			<PlantCardList plants={allPlants} />
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
