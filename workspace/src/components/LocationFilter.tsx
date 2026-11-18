import { useLocationFilterStore } from "./useLocationFilterStore.ts";

const locations = [
  "Wohnzimmer",
  "Schlafzimmer",
  "Küche",
  "Badezimmer",
  "Arbeitszimmer",
  "Flur",
];

export default function LocationFilter() {
  const { selectedLocations, toggleLocation } = useLocationFilterStore();

  return (
    <div className={"ButtonBar mb-8"}>
      {locations.map((location) => (
        <button
          key={location}
          className={
            selectedLocations.includes(location) ? "primary" : "secondary"
          }
          onClick={() => toggleLocation(location)}
        >
          {location}
        </button>
      ))}
    </div>
  );
}
