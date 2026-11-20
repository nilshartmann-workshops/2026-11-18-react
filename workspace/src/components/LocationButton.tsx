import {useLocationFilterStore} from "./useLocationFilterStore.ts";

type LocationButtonProps = {
	location: string;
}

export default function LocationButton({location}: LocationButtonProps) {

	const toggleLocation = useLocationFilterStore(
		currentState => currentState.toggleLocation
	);

	const isButtonSelected = useLocationFilterStore(
		currentState => currentState.selectedLocations.includes(location)
	);

	return <button
		className={
			isButtonSelected ? "primary" : "secondary"
		}
		onClick={() => toggleLocation(location)}
	>
		{location}
	</button>
}