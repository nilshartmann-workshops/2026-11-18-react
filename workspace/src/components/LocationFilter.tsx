import {useLocationFilterStore} from "./useLocationFilterStore.ts";

const locations = [
	"Wohnzimmer",
	"Schlafzimmer",
	"Küche",
	"Badezimmer",
	"Arbeitszimmer",
	"Flur",
];

export default function LocationFilter() {

	const store = useLocationFilterStore();

	return (
		<div className={"ButtonBar mb-8"}>
			{locations.map((location) => (
				<button
					key={location}
					className={
						store.selectedLocations.includes(location) ? "primary" : "secondary"
					}
					onClick={() => store.toggleLocation(location)}
				>
					{location}
				</button>
			))}
		</div>
	);
}