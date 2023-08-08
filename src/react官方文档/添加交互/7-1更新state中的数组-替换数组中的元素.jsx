import { useState } from "react";

export default function DemoA() {
  const [nums, setNums] = useState([1, 2, 3]);
  return (
    <>
      <ul>
        {nums.map((item, index) => (
          <li key={index}>
            {item} <span> </span>
            <button
              onClick={() => {
                setNums(
                  nums.map((el, i) => {
                    if (i === index) {
                      return el + 1;
                    } else {
                      return el;
                    }
                  })
                );
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
