import LocationButton from "./LocationButton.tsx";

const locations = [
  "Wohnzimmer",
  "Schlafzimmer",
  "Küche",
  "Badezimmer",
  "Arbeitszimmer",
  "Flur",
];

export default function LocationFilter() {
  return (
    <div className={"ButtonBar mb-8"}>
      {locations.map((location) => (
        <LocationButton key={location} location={location} />
      ))}
    </div>
  );
}
