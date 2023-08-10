import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [selectedIds, setSelectedId] = useState([]);

  // TODO: 支持多选
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // TODO: 支持多选
    setSelectedId(
      selectedIds.includes(toggledId)
        ? selectedIds.filter((id) => id !== toggledId)
        : [...selectedIds, toggledId]
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: 支持多选
              // letter.id === selectedId
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
