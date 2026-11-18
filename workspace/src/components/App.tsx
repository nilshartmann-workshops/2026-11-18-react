import PlantCard from "./PlantCard.tsx";

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


export default function App() {
	return (
		<>
      <PlantCard name={"Rose"}
                 location={"Küche"}
                 wateringInterval={1}
      />

      <PlantCard name={"Aloe Vera"}
                 location={"Schlafzimmer"}
                 wateringInterval={7}
                 lastWatered={"2026-11-16"}
      />
		</>

   )
}
