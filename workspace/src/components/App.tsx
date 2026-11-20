import {Activity, createContext, Suspense, useState} from "react";
import PlantCardListLoader from "./PlantCardListLoader.tsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ErrorBoundary} from "react-error-boundary";

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

// const allPlants: Plant[] = [
// 	{
// 		id: "1",
// 		name: "Aloe Vera",
// 		location: "Schlafzimmer",
// 		wateringInterval: 12,
// 		lastWatered: "2025-06-16",
// 	},
// 	{
// 		id: "2",
// 		name: "Orchidee",
// 		location: "Wohnzimmer",
// 		wateringInterval: 1,
// 	},
// 	{
// 		id: "3",
// 		name: "Grüne Monstera",
// 		location: "Küche",
// 		wateringInterval: 7,
// 		lastWatered: "2025-06-20",
// 	},
// ];

// State bzw. Zustand (<-- Model)

export default function App() {

	// const [allPlants, setAllPlants] = useState<Plant[]>([])
	// TanStack Query (React Query)
	return (
		<div className={"AppContainer"}>
			<h1>Pflanzen Manager</h1>
			<ErrorBoundary fallback={<div>Leider konnten die Daten nicht geladen werden :-(</div>} onError={err => {
				console.error(err);
			}}>
				<Suspense fallback={<div className={"CardListFallback"}>Pflanzen werden geladen</div>}>
					<PlantCardListLoader />
				</Suspense>
			</ErrorBoundary>
			<h2>Impressum</h2>

			<ReactQueryDevtools />
		</div>
   )
}
