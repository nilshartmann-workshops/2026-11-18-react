import {Plant} from "../types.ts";
import PlantCard from "./PlantCard.tsx";
import {Fragment} from "react";

type PlantCardListProps = {
	plants: Plant[]
}

export default function PlantCardList({plants}: PlantCardListProps) {
	// todo: Liste von Plant-Objekten rendern

	return <div className={"PlantCardList"}>
		{
			plants.map(plant => {
				return (
					<PlantCard
						key={plant.id}
						{...plant}
					/>
				)
			})
		}

	</div>;
}