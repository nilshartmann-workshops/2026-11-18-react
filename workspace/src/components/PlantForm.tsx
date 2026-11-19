import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { PlantSchema } from "../types.ts";
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

export default function PlantForm() {
  const form = useForm({
    resolver: zodResolver(PlantFormSchema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    async mutationFn(data: PlantFormState) {
      const response = await fetch("http://localhost:7200/api/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Speichern fehlgeschlagen: ${response.status}`);
      }
      return PlantSchema.parse(await response.json());
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["plants", "list"] });
    },
  });

  const handleSave = (data: PlantFormState) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSave)}>
      <div className={"FormControl"}>
        <label htmlFor={"name"}>Name der Pflanze</label>
        <input
          id={"name"}
          {...form.register("name")}
          className={form.formState.errors.name ? "error" : undefined}
        />
        <ErrorMessage msg={form.formState.errors.name?.message} />
      </div>

      <div className={"FormControl"}>
        <label htmlFor={"location"}>Standort</label>
        <select
          id={"location"}
          {...form.register("location")}
          className={form.formState.errors.location ? "error" : undefined}
        >
          <option value="">Standort wählen...</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <ErrorMessage msg={form.formState.errors.location?.message} />
      </div>

      <Controller
        control={form.control}
        name={"wateringInterval"}
        render={({ field, fieldState }) => (
          <IntervalSelector
            interval={field.value}
            onIntervalChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <div className={"FormControl"}>
        <label htmlFor={"lastWatered"}>Zuletzt gegossen</label>
        <input
          id={"lastWatered"}
          type={"date"}
          {...form.register("lastWatered", {
            setValueAs: (value) => (value === "" ? undefined : value),
          })}
          className={form.formState.errors.lastWatered ? "error" : undefined}
        />
        <ErrorMessage msg={form.formState.errors.lastWatered?.message} />
      </div>

      <div className={"FormButtons"}>
        <button
          type={"button"}
          className={"secondary"}
          onClick={() => form.reset()}
        >
          Eingaben löschen 🧹
        </button>
        <button
          type={"submit"}
          className={"primary"}
          disabled={mutation.isPending}
        >
          Pflanze hinzufügen 🌱
        </button>
      </div>
      {mutation.isError && (
        <div className={"error-message"}>Speichern fehlgeschlagen</div>
      )}
      {mutation.isSuccess && (
        <div className={"success-message"}>Pflanze angelegt</div>
      )}
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
