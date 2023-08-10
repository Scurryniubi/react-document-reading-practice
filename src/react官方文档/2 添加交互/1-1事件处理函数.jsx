import { useState, Fragment } from "react";

function DemoB({date,time}) {
  return (
    <>
      <button onClick={() => {
        console.log('今天是'+date+' '+time);
      }}>DemoB点击</button>
    </>
  )
}

function Button({ onBeat, children }) {
  return (
    <>
      <button
        onClick={onBeat}
        style={{ width: 80, height: 40, backgroundColor: "skyblue"  }}
      >
        {children}
      </button>
    </>
  );
}

function PlayMovie({ item, children }) {
  function handleMovie() {
    console.log('正在播放电影：'+item);
  }
  return (
    <>
      {/* <Button onClick={handleMovie}>{ children }</Button> */}
      <Button onBeat={handleMovie}>{ children }</Button>
    </>
  )
}

function PlayMusic({ item, children }) {
  function handleMusic() {
    console.log('正在播放音乐：'+item);
  }
  return (
    <>
      {/* <Button onClick={handleMusic}>{ children }</Button> */}
      <Button onBeat={handleMusic}>{ children }</Button>
    </>
  )
}

function DemoA() {
  function handleClick() {
    console.log("点击了。。。");
  }
  function handleClick4() {
    console.log("点击4--传递时直接调用");
  }

  return (
    <>
      <PlayMovie item={'猫和老鼠'} >
        播放电影
      </PlayMovie>
        <br /><br />
      <PlayMusic item={'两只老虎'}>
        播放音乐
      </PlayMusic>

      {/* <DemoB date={'2023-8-7'} time={'10:05'}>
        我是DemoB-1
      </DemoB>
      <DemoB date={'2022-8-7'} time={'14:05'}>
        我是DemoB-2
      </DemoB>

      <button onClick={handleClick}>点击1--普通写法</button>
      <button
        onClick={function handleClick2() {
          console.log("点击2");
        }}
      >
        点击2--内联写法
      </button>
      <button
        onClick={() => {
          console.log("点击3");
        }}
      >
        点击3--内联箭头函数写法
      </button>
      <button onClick={handleClick4()}>
        点击4--传递时直接调用
      </button> */}
    </>
  );
}

export default DemoA;
