import { useState } from "react";

export default function DemoA() {
  const [person, setPerson] = useState({
    Name: "Kevin",
    detail: {
      Title: "Dead",
      City: "Hangzhou",
      Image: "1111",
    },
  });
  return (
    <>
      Name:
      <input
        type="text"
        name="Name"
        value={person.name}
        onChange={(e) => {
          setPerson({ ...person, Name: e.target.value });
        }}
      />
      Title:
      <input
        type="text"
        name="Title"
        value={person.Title}
        onChange={(e) => {
          setPerson({
            ...person,
            detail: {
              ...person.detail,
              Title: e.target.value,
            },
          });
        }}
      />
      City:
      <input
        type="text"
        name="City"
        value={person.City}
        onChange={(e) => {
          setPerson({
            ...person,
            detail: {
              ...person.detail,
              City: e.target.value,
            },
          });
        }}
      />
      Image:
      <input
        type="text"
        name="Image"
        value={person.Image}
        onChange={(e) => {
          setPerson({
            ...person, detail: {
              ...person.detail,
              Image:e.target.value
          } });
        }}
      />
    </>
  );
}
