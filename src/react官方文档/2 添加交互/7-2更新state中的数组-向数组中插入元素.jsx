import { useState } from "react";

export default function DemoA() {
  const [iptVal, setIptVal] = useState("");
  const [artists, setArtists] = useState(["wwww", "aaaa", "ssss", "dddd"]);
  const insertIndex = 1;
  function handleInsert() {
    setArtists([
      ...artists.slice(0, insertIndex),
      iptVal,
      ...artists.slice(insertIndex),
    ]);
  }
  return (
    <>
      <h1>艺术家们：</h1>
      <input
        type="text"
        name=""
        id=""
        style={{ marginRight: "10px" }}
        value={iptVal}
        onChange={(e) => {
          setIptVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleInsert();
        }}
      >
        插入
      </button>
      <ul>
        {artists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
