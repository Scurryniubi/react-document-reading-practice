import { useState } from "react";

export default function DemoA() {
  const [text, setText] = useState("");
  const [type, setType] = useState(null);
  const [error, setError] = useState(false);

  function handleClick() {
    setTimeout(() => {
      setSubmitting(true)
      const answer = text.toLocaleLowerCase()
      if (answer === 'lima') {
        
      }
    }, 1000);
  }

  return (
    <>
      <h1>城市问答</h1>
      <p>哪个城市有把空气变成饮用水的广告牌?</p>
      <form action="">
        <textarea
          cols="40"
          rows="6"
          disabled={submitting}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <br />
        <button disabled={text === "" || submitting === true} onClick={handleClick}>提交</button>
      </form>
    </>
  );
}

// {
//   /* 
//   应该有哪些state？ ===>  
//     1.文本 text
//     // 2.起始状态 starting
//     // 3.编辑状态 typing
//     4.提交状态 submitting
//     5.错误状态 error

//     精简这些状态=> 起始状态starting 和 编辑状态typing 可以通过 文本状态text 是否为空来判断 所以一共就三个状态！
// */
// }
