import { useState } from "react";

export default function DemoA() {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <form>
      <label>
        First name:
        <b style={{ display: isTyping ? "none" : "block" }}>Jane</b>
        <input style={{ display: isTyping ? "block" : "none" }} />
        {/* {isTyping ? <b>Jane</b> : <input />} */}
      </label>
      <label>
        Last name:{" "}
        <b style={{ display: isTyping ? "none" : "block" }}>Jacobs</b>
        <input style={{ display: isTyping ? "block" : "none" }} />
        {/* {isTyping ? <b>Jacobs</b> : <input />} */}
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          setIsTyping(!isTyping);
        }}
      >
        Edit Profile
      </button>
      <p>
        <i>Hello, Jane Jacobs!</i>
      </p>
    </form>
  );
}
