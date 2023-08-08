import { useState } from "react";

export default function DemoA() {
  const [num, setNum] = useState(10);
  return (
    <>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum((n) => n + 1);
          setNum((n) => n + 1);
          setNum((n) => n + 1);
        }}
      >
        +3(更新函数)
      </button>
      <button
        onClick={() => {
          setNum(num + 1);
          setNum(num + 1);
          setNum(num + 1);
        }}
      >
        +3(普通情况)
      </button>
      <button onClick={() => {
        setNum(num + 5)
        setNum(n=>n+1)
      }}>
        +5 +1 --- (setNum(val) 可以类比成 setNum(n={">"}val))
      </button>
    </>
  );
}
