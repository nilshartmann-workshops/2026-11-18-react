import {
  selectIsSelected,
  useLocationFilterStore,
} from "./useLocationFilterStore.ts";

type LocationButtonProps = {
  location: string;
};

export default function LocationButton({ location }: LocationButtonProps) {
  const isSelected = useLocationFilterStore(selectIsSelected(location));
  const toggleLocation = useLocationFilterStore(
    (state) => state.toggleLocation,
  );

  return (
    <button
      className={isSelected ? "primary" : "secondary"}
      onClick={() => toggleLocation(location)}
    >
      {location}
    </button>
  );
}
