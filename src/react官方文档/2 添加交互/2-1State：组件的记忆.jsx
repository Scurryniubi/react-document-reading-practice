import { sculptureList } from "../../assets/data";
import { useState } from "react";

export default function DemoA() {
  const [index, setIndex] = useState(0);
  const [isShow,setIsShow] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setIndex((index + 1) % 12);
        }}
      >
        下一张
      </button>
      <h1> {sculptureList[index].name} </h1>
      <p>
        ({index + 1} of {sculptureList.length})
      </p>
      <button onClick={() => {
        setIsShow(!isShow)
      }}>查看详情</button>
      <br />
      <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
      <br />
      <span>  {isShow && sculptureList[index].description}</span>
    </>
  );
}
