import {useCallback, useMemo, useRef, useState} from "react";

import Child from "./Child.tsx";
import MemoChild from "./MemoChild.tsx";

// Hook-Funktion


/**
 * Spielwiese zum Rendern
 *
 */
//  0   | setCounter
//  "A"  | setText

function useHelloWorld() {

}

export default function RenderSpielwiese() {
  const [counter, setCounter] = useState(0);  //
  const [text, setText] = useState(""); //


  //
  // const handleReset = useCallback(
  //   () => setCounter(0),
  //   []
  // );

  const handleReset = () => setCounter(0);
  const tags = ["Zimmerpflanze", "pflegeleicht"]

  // const tags = useMemo(
  //   () => {
  //     return ["Zimmerpflanze", "pflegeleicht"];
  //   },
  //   []
  // );

  // Virtual DOM => JS Objekt
  return (
    <div className={"space-y-4"}>
      <button className={"primary"} onClick={() => setCounter(counter + 1)}>
        Zähler erhöhen (aktuell: {counter})
      </button>

      <div className={"FormControl"}>
        <label>Ein Textfeld (der Text wird sonst nirgends benutzt)</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div className={"flex gap-x-4"}>
        <Child name={"Kind A"} value={counter} />
        <Child name={"Kind B"} value={42} />
        <MemoChild
          name={"Memo-Kind"}
          value={42}
          onReset={handleReset}
          tags={tags}
        />
      </div>
    </div>
  );
}
