import {useSuspenseQuery} from "@tanstack/react-query";
import {PlantSchema} from "../types.ts";
import PlantCard from "./PlantCard.tsx";
import {Activity, Suspense, useState} from "react";

export default function MultipleApp() {

	const [tabId, setTabId] = useState("1")

	return <div>
		<button onClick={() => setTabId("1")} className={"primary"}>Pflanze 1</button>
		<button onClick={() => setTabId("2")} className={"primary"}>Pflanze 2</button>
		<div className={"flex gap-x-4"}>
			<Activity mode={tabId==="1" ? "visible" : "hidden"}>
				<Suspense fallback={<div>Pflanze 1 wird geladen</div>}>
						<PlantCardLoader plantId={"1"}/>
				</Suspense>
			</Activity>

			<Activity mode={tabId==="2" ? "visible" : "hidden"}>
				<Suspense fallback={<div>Pflanze 2 wird geladen</div>}>
					<PlantCardLoader plantId={"2"}/>
				</Suspense>
			</Activity>

		</div>
	</div>

}

type PlantCardLoaderProps = {
	plantId: string;
}

function PlantCardLoader({plantId}: PlantCardLoaderProps) {
	const result = useSuspenseQuery({
		queryKey: ["plants", "details", plantId],
		async queryFn() {
			console.log("Loading Plant", plantId)
			const slow = plantId === "1" ? 2000 : 4000
			const response = await fetch(`http://localhost:7200/api/plants/${plantId}?slow=${slow}`);
			const result = await response.json();
			const plant = PlantSchema.parse(result)
			return plant;
		}
	})

	const plant = result.data;

	return <PlantCard {...plant} />
}