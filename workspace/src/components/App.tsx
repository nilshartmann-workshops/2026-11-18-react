import PlantCard from "./PlantCard.tsx";

export default function App() {
	return <div className={"AppContainer"}>
    <PlantCard name={"Rose"}
               location={"Küche"}
               wateringInterval={1}
    />

    <PlantCard name={"Aloe Vera"}
							 location={"Schlafzimmer"}
							 wateringInterval={7}
							 lastWatered={"2026-11-16"}
		/>
	</div>;
}
