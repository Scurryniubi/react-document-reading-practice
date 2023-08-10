import { useState } from "react";

export default function Picture() {
  const [isPic, setIsPic] = useState(false);
  return (
    // <div className="background background--active">
    <div
      className={isPic ? "background" : "background background--active"}
      onClick={() => {
        setIsPic(false);
      }}
    >
      <img
        className={isPic ? "picture picture--active" : "picture"}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setIsPic(true);
        }}
      />
    </div>
  );
}
