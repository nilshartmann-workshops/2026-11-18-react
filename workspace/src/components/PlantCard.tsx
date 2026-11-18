
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

type PlantCardProps = {
  name: string;
  location: string;
  wateringInterval: number
  lastWatered?: string
}

// JavaScript Ausdrücke   (Expression)   function()  String 2+2 null  ?-Operator JSX
//            Anweisungen (Statement)    if  switch  function() {...}

export default function PlantCard(
  { location, name, lastWatered, wateringInterval }: PlantCardProps) {
// export default function PlantCard(props: PlantCardProps) {

  // Fragment ?
  //

  return (
    <div className={"PlantCard"}>
      <header>
        <h2>{name}</h2>
        <div>📍 {location}</div>
      </header>
      <section>
        <div>{wateringInterval === 1 ? "täglich gießen" : `Alle ${wateringInterval} Tage gießen` }</div>
        { lastWatered ? <div>Zuletzt: {lastWatered}</div> : null }
      </section>
    </div>
  );
}
