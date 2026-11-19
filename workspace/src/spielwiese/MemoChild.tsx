/* eslint-disable react-hooks/refs --
 * Render-Zähler wie in Child.tsx, die Begründung steht dort.
 */
import { memo, useRef } from "react";

type MemoChildProps = {
  name: string;
  value: number;
  onReset(): void;
  tags: string[];
};


const MemoChild = memo(function MemoChild({ name, value, onReset, tags }: MemoChildProps) {
  const renderCount = useRef(0);
  renderCount.current++;

  console.log(`${name} rendert (${renderCount.current}. Mal)`);

  return (
    <div className={"space-y-2 rounded-lg bg-white p-4 shadow-md"}>
      <h3 className={"font-semibold"}>{name}</h3>
      <div className={"text-sm text-gray-600"}>value: {value}</div>
      <div className={"text-sm text-gray-600"}>tags: {tags.join(", ")}</div>
      <button className={"sm"} onClick={onReset}>
        Zähler zurücksetzen
      </button>
      <div className={"RenderCounter"}>{renderCount.current}× gerendert</div>
    </div>
  );
})

export default MemoChild;