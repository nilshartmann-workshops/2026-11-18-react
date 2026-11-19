import { type FormEvent, useState } from "react";
import { z } from "zod";

import IntervalSelector from "./IntervalSelector.tsx";

const locations = [
  "Wohnzimmer",
  "Arbeitszimmer",
  "Küche",
  "Schlafzimmer",
  "Badezimmer",
];

const PlantFormSchema = z.object({
  name: z.string().nonempty("Bitte gib den Namen deiner Pflanze ein"),
  location: z.string().nonempty("Bitte wähle den Standort deiner Pflanze aus"),
  wateringInterval: z
    .number("Bitte gib an, wie oft die Pflanze gegossen werden muss")
    .min(1, "Das Intervall beträgt mindestens einen Tag"),
  lastWatered: z.iso.date("Bitte gib ein gültiges Datum ein").optional(),
});
type PlantFormState = z.infer<typeof PlantFormSchema>;

// Je Feld die Meldungen aus zod, angezeigt wird jeweils die erste
type PlantFormErrors = { [Field in keyof PlantFormState]?: string[] };

export default function PlantForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [wateringInterval, setWateringInterval] = useState<number>();
  const [lastWatered, setLastWatered] = useState("");
  const [errors, setErrors] = useState<PlantFormErrors>({});

  const handleSave = (data: PlantFormState) => {
    console.log("Daten", data);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Ohne preventDefault schickt der Browser das Formular selbst ab und lädt die Seite neu
    e.preventDefault();

    const result = PlantFormSchema.safeParse({
      name,
      location,
      wateringInterval,
      // Ein leeres Datumsfeld liefert "", das Schema erwartet dann undefined
      lastWatered: lastWatered === "" ? undefined : lastWatered,
    });

    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors);
      return;
    }

    setErrors({});
    handleSave(result.data);
  };

  const handleReset = () => {
    setName("");
    setLocation("");
    setWateringInterval(undefined);
    setLastWatered("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={"FormControl"}>
        <label htmlFor={"name"}>Name der Pflanze</label>
        <input
          id={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "error" : undefined}
        />
        <ErrorMessage msg={errors.name?.[0]} />
      </div>

      <div className={"FormControl"}>
        <label htmlFor={"location"}>Standort</label>
        <select
          id={"location"}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={errors.location ? "error" : undefined}
        >
          <option value="">Standort wählen...</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <ErrorMessage msg={errors.location?.[0]} />
      </div>

      <IntervalSelector
        interval={wateringInterval}
        onIntervalChange={setWateringInterval}
        error={errors.wateringInterval?.[0]}
      />

      <div className={"FormControl"}>
        <label htmlFor={"lastWatered"}>Zuletzt gegossen</label>
        <input
          id={"lastWatered"}
          type={"date"}
          value={lastWatered}
          onChange={(e) => setLastWatered(e.target.value)}
          className={errors.lastWatered ? "error" : undefined}
        />
        <ErrorMessage msg={errors.lastWatered?.[0]} />
      </div>

      <div className={"FormButtons"}>
        <button type={"button"} className={"secondary"} onClick={handleReset}>
          Eingaben löschen 🧹
        </button>
        <button type={"submit"} className={"primary"}>
          Pflanze hinzufügen 🌱
        </button>
      </div>
    </form>
  );
}

type ErrorMessageProps = {
  msg?: string;
};

function ErrorMessage({ msg }: ErrorMessageProps) {
  if (!msg) {
    return null;
  }
  return <span className={"error-message"}>{msg}</span>;
}
