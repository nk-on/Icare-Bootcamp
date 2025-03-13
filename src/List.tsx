import { useState } from "react";

function List({ items }: { items: string[] }) {
  const [clickedIdx, setClickedIdx] = useState(-1);
  return (
    <>
      <ul>
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setClickedIdx(idx)}
            style={{ background: `${clickedIdx === idx ? "red" : ""}` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default List;
