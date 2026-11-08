const locations = [
  "Wohnzimmer",
  "Schlafzimmer",
  "Küche",
  "Badezimmer",
  "Arbeitszimmer",
  "Flur",
];

type LocationFilterProps = {
  selectedLocations: string[];
  onLocationToggle(location: string): void;
};

export default function LocationFilter({
  selectedLocations,
  onLocationToggle,
}: LocationFilterProps) {
  return (
    <div className={"ButtonBar mb-8"}>
      {locations.map((location) => (
        <button
          key={location}
          className={
            selectedLocations.includes(location) ? "primary" : "secondary"
          }
          onClick={() => onLocationToggle(location)}
        >
          {location}
        </button>
      ))}
    </div>
  );
}
