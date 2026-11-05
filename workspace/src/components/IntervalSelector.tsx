import { ChangeEvent, useState } from "react";

export default function IntervalSelector() {
  const [interval, setInterval] = useState(1);

  const handleIntervalChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInterval(Number(e.target.value));
  };

  return (
    <div className={"FormControl"}>
      <label>Gießintervall</label>
      <input type={"number"} value={interval} onChange={handleIntervalChange} />
      <div className={"flex gap-x-2"}>
        <button type="button" className={"sm"} onClick={() => setInterval(1)}>
          Täglich
        </button>
        <button type="button" className={"sm"} onClick={() => setInterval(7)}>
          Wöchentlich
        </button>
        <button type="button" className={"sm"} onClick={() => setInterval(14)}>
          Alle zwei Wochen
        </button>
      </div>
      <div className={"px-1 text-sm"}>Alle {interval} Tage gießen</div>
    </div>
  );
}
