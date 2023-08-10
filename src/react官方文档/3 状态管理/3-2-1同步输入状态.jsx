import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");
    function handleChange(e) {
      setText(e.target.value);
    }
  return (
    <>
      <Input text={text} handleChange={handleChange} label="第一个输入框" />
      <Input text={text} handleChange={handleChange} label="第二个输入框" />
    </>
  );
}

function Input({ label, text, handleChange }) {
  // const [text, setText] = useState("");
  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
}
