import PlantCard from "./PlantCard.tsx";
import {Plant} from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import {Activity, createContext, useState} from "react";
import RenderSpielwiese from "../spielwiese/RenderSpielwiese.tsx";
import EffektSpielwiese from "../spielwiese/EffektSpielwiese.tsx";
import BeetSpielwiese from "../spielwiese/BeetSpielwiese.tsx";

// @components
//  import ... from "@components/..."

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
		location: "Küche",
		wateringInterval: 7,
		lastWatered: "2025-06-20",
	},
];

// State bzw. Zustand (<-- Model)

const LocaleContext = createContext<{locale: string}>({locale: "de"});

export default function App() {

	const [locale, setLocale] = useState("de");

	return (
		<div className={"AppContainer"}>
			{/*<EffektSpielwiese />*/}
			{/*<BeetSpielwiese />*/}
			{/*<RenderSpielwiese />*/}
			<LocaleContext value={{locale: locale}}>
				<PlantCardList plants={allPlants} />
				<button onClick={() => setLocale("de")}>de</button>
				<button onClick={() => setLocale("en")}>en</button>
			</LocaleContext>
		</div>

   )
}
