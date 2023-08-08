import { useState } from "react";
import { useImmer } from "use-immer";
import Background from "./assets/Background";
import Box from "./react官方文档/添加交互/6-3-3使用 Immer 更新对象 .jsx";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useImmer({
    color: "orange",
    position: initialPosition,
  });

  function handleMove( dx, dy) {
    // shape.position.x += dx;
    // shape.position.y += dy;
    setShape((draft) => {
      draft.position.x = draft.position.x + dx;
      draft.position.y = draft.position.y + dy;
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}
