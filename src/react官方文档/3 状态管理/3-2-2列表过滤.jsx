import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
  }
  const items = filterItems(foods, query);
  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={items} />
    </>
  );
}

function SearchBar({ query, handleChange }) {
  return (
    <label>
      搜索： <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
