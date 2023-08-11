import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"和 " + contact.name + " 聊天"}
        onChange={(e) => {
          // TODO: 派发 edited_message
          // (从 e.target.value 获取输入框的值)
          dispatch({
            type: "edited_message",
            message:message
          });
        }}
      />
      <br />
      <button>发送到 {contact.email}</button>
    </section>
  );
}
