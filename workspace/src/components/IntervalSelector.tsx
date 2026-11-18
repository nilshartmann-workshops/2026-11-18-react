import {useState} from "react";

export default function IntervalSelector() {

	// let value = "Beispieltext"
	// const state = useState("Beispieltext")
	// const value = state[0];
	// const setValue = state[1]

	const [ intervalValue, setIntervalValue ] = useState(1)

	console.log("IntervalSelector ausgeführt", intervalValue);

	return <div>
		Gießintervall: <input type={"number"}
													value={intervalValue}
													onChange={
														(event) => { setIntervalValue(Number(event.target.value)) }
													}
                  	/>
		                <div>Du musst alle {intervalValue} Tage gießen</div>
		<button onClick={() => setIntervalValue(7)}>Wöchentlich gießen</button>

	</div>
}