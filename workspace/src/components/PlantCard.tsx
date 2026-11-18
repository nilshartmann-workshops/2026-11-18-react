
// Properties (Props)

// return <PlantCard name={"Aloe Vera"}
//                   location={"Schlafzimmer"}
//                   wateringInterval={7}
//                   lastWatered={"2026-11-16"}
// />;

/*
props = {
  name: "Aloe Vera"
  location: "Schlafzimmer"
  wateringInterval: 7
  lastWatered: "2026-11-16"
}
 */

import {getDaysUntilWatering} from "./date-utils.ts";
import {Plant} from "../types.ts";

type PlantCardProps = {
  name: string;
  location: string;
  wateringInterval: number
  lastWatered?: string

  // plant: Plant

  // ...
}

// JavaScript Ausdrücke   (Expression)   function()  String 2+2 null  ?-Operator JSX
//            Anweisungen (Statement)    if  switch  function() {...}

export default function PlantCard(
  { location, name, lastWatered, wateringInterval }: PlantCardProps) {
// export default function PlantCard(props: PlantCardProps) {

  // Fragment ?
  //
  const wateringText =  wateringInterval === 1 ? "täglich gießen" : `Alle ${wateringInterval}  Tage gießen`;

  const getLastWateredMessage = () => {
    console.log(wateringText)
    if (!lastWatered) {
      return null;
    }

    const lastWateredClassName = getDaysUntilWatering(lastWatered, wateringInterval) > 4 ?
      "error-message" : "success-message";

    return <div className={lastWateredClassName}></div>
  }

  return (
    <div className={"PlantCard"}>
      <header>
        <h2>{name}</h2>
        <div>📍 {location}</div>
      </header>
      <section>
        {getLastWateredMessage()}
        <div>
          { wateringText }
        </div>



        <div>{wateringInterval === 1 ? "täglich gießen" : `Alle ${wateringInterval} Tage gießen` }</div>
        { lastWatered ? <div>Zuletzt: {lastWatered}</div> : null }
      </section>
    </div>
  );
}
