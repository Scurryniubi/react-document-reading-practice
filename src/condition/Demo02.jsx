import { useState, Fragment } from "react";
import '../assets/全局样式.css'

function DemoA() {
  function handleClick() {
    console.log("点击了。。。");
  }

  return (
    <>
      <button onClick={handleClick}>点击1--普通写法</button>
      <button onClick={function handleClick2() {
        console.log('点击2');
      }}>点击2--内联写法</button>
      <button onClick={() => {
        console.log('点击3');
      }}>点击3--内联箭头函数写法</button>
      <button></button>
    </>
  );
}

export default DemoA;























































































// function DemoA() {
//   let [num, setNum] = useState(0);
//   let hw = { width: 400, height: 200, color: "blue", fontSize: 60 }
//   return (
//     <>
//       <div className="box">
//         hello world
//       </div>
//       <h1>{num}</h1>
//       <button
//         onClick={() => {
//           setNum(num + 1);
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           setNum(num - 1);
//         }}
//       >
//         -1
//       </button>
//     </>
//   );
// }

// export default DemoA;
