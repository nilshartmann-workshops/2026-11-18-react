import {useState} from "react";

// Unkontrollierte Komponente
// Kontrollierte Komponente

type IntervalSelectorProps = {
	intervalValue: number;
	onIntervalValueChange(newIntervalValue: number): void
}

export default function IntervalSelector({intervalValue, onIntervalValueChange}:
	IntervalSelectorProps) {

	// let value = "Beispieltext"
	// const state = useState("Beispieltext")
	// const value = state[0];
	// const setValue = state[1]

	// const [ intervalValue, setIntervalValue ] = useState(1)

	console.log("IntervalSelector ausgeführt", intervalValue);

	return <div>
		Gießintervall: <input type={"number"}
													value={intervalValue}
													onChange={
														(event) => { onIntervalValueChange(Number(event.target.value)) }
													}
                  	/>

		                <div>Du musst alle {intervalValue} Tage gießen</div>

		<button onClick={() => onIntervalValueChange(7)}>Wöchentlich gießen</button>
		<button onClick={() => onIntervalValueChange(0)}>Zurücksetzen!</button>

	</div>
}