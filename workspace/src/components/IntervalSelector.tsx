import { ChangeEvent } from "react";

type IntervalSelectorProps = {
  interval?: number;
  onIntervalChange(newInterval: number): void;
  error?: string;
};

export default function IntervalSelector({
  interval,
  onIntervalChange,
  error,
}: IntervalSelectorProps) {
  const handleIntervalChange = (e: ChangeEvent<HTMLInputElement>) => {
    onIntervalChange(Number(e.target.value));
  };

  return (
    <div className={"FormControl"}>
      <label>Gießintervall</label>
      <input
        type={"number"}
        value={interval ?? ""}
        onChange={handleIntervalChange}
        className={error ? "error" : undefined}
      />
      <div className={"flex gap-x-2"}>
        <button
          type="button"
          className={"sm"}
          onClick={() => onIntervalChange(1)}
        >
          Täglich
        </button>
        <button
          type="button"
          className={"sm"}
          onClick={() => onIntervalChange(7)}
        >
          Wöchentlich
        </button>
        <button
          type="button"
          className={"sm"}
          onClick={() => onIntervalChange(14)}
        >
          Alle zwei Wochen
        </button>
      </div>
      {error && <span className={"error-message"}>{error}</span>}
      {interval !== undefined && (
        <div className={"px-1 text-sm"}>Alle {interval} Tage gießen</div>
      )}
    </div>
  );
}
