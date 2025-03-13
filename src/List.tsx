import { useState } from "react";

function List({ items }: { items: string[] }) {
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  return (
    <>
      <ul>
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setHoveredIdx(idx)}
            style={{ background: `${hoveredIdx === idx ? "red" : ""}` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default List;
