import {useLocationFilterStore} from "./useLocationFilterStore.ts";
import LocationButton from "./LocationButton.tsx";
import {memo} from "react";

const locations = [
	"Wohnzimmer",
	"Schlafzimmer",
	"Küche",
	"Badezimmer",
	"Arbeitszimmer",
	"Flur",
];

const LocationFilter = memo(function LocationFilter() {

	console.log("LocationFilter Rendered", new Date().toLocaleTimeString());

	return (
		<div className={"ButtonBar mb-8"}>
			{locations.map((location) => (
				<LocationButton
					key={location}
					location={location} />
			))}
		</div>
	);
});

export default LocationFilter;