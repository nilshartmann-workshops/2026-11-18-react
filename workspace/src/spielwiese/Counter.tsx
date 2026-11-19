import {useEffect, useState} from "react";

function useDocumentTitle(title: string) {
  useEffect(
    () => {
      const oldTitle = window.document.title;
      window.document.title = title;

      return () => {
        console.log("CLEANUP", oldTitle)
        // ...
        window.document.title = oldTitle;
      }
    },
    [title]
  )
}

// Render Phase => Virtual Dom
// Commit => Virtual -> DOM
// Komponentenfunktionen müssen "pure" Funktionen
export default function Counter() {
  const [appleCount, setAppleCount] = useState(0);
  const [orangeCount, setOrangeCount] = useState(0);

  // https://react.dev/learn/you-might-not-need-an-effect

  useDocumentTitle("Äpfel " + appleCount);


  return (
    <div
      className={"flex items-center gap-x-4 rounded-lg bg-white p-4 shadow-md"}
    >
      {/*<title>Äpfel {appleCount}</title>*/}
      <span>🍎 {appleCount}</span>
      <span>🍊 {orangeCount}</span>
      <button
        className={"primary"}
        onClick={() => setAppleCount(appleCount + 1)}
      >
        Ein Apfel mehr
      </button>
      <button
        className={"secondary"}
        onClick={() => setOrangeCount(orangeCount + 1)}
      >
        Eine Orange mehr
      </button>
    </div>
  );
}
