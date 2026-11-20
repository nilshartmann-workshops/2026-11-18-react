import {create} from "zustand/react";
import {devtools} from "zustand/middleware";

type LocationFilterStore = {
	selectedLocations: string[]
	toggleLocation(location: string): void
}

export const useLocationFilterStore = create<LocationFilterStore>()( devtools((setState, getState) => {
	return {
		selectedLocations: ["Wohnzimmer"],
		toggleLocation(location: string) {

			const newSelectedLocations = getState().selectedLocations.includes(location)
				? getState().selectedLocations.filter((l) => l !== location)
				: [...getState().selectedLocations, location]

			setState({
				selectedLocations: newSelectedLocations
			})
		}
	}
}));