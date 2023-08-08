import { useImmer } from "use-immer";

export default function DemoA() {
  // const [person, setPerson] = useState({
  //   Name: "Kevin",
  //   detail: {
  //     Title: "Dead",
  //     City: "Hangzhou",
  //     Image: "1111",
  //   },
  // });
  const [person, updatePerson] = useImmer({
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
          updatePerson((draft) => {
            draft.Name = e.target.value;
          });
        }}
      />
      Title:
      <input
        type="text"
        name="Title"
        value={person.Title}
        onChange={(e) => {
          updatePerson((draft) => {
            draft.detail.Title = e.target.value;
          });
        }}
      />
      City:
      <input
        type="text"
        name="City"
        value={person.City}
        onChange={(e) => {
          updatePerson((draft) => {
            draft.detail.City = e.target.value;
          });
        }}
      />
      Image:
      <input
        type="text"
        name="Image"
        value={person.Image}
        onChange={(e) => {
          updatePerson((draft) => {
            draft.detail.Image = e.target.value;
          });
        }}
      />
      <h1>{person.Name}</h1>
      <h2>{person.detail.Title}</h2>
      <h2>{person.detail.City}</h2>
      <h2>{person.detail.Image}</h2>
    </>
  );
}

// import { useImmer } from "use-immer";

// export default function DemoA() {
//   const [person, updatePerson] = useImmer({
//     name: "Niki de Saint Phalle",
//     artwork: {
//       title: "Blue Nana",
//       city: "Hamburg",
//       image: "https://i.imgur.com/Sd1AgUOm.jpg",
//     },
//   });

//   function handleNameChange(e) {
//     updatePerson((draft) => {
//       draft.name = e.target.value;
//     });
//   }

//   function handleTitleChange(e) {
//     updatePerson((draft) => {
//       draft.artwork.title = e.target.value;
//     });
//   }

//   function handleCityChange(e) {
//     updatePerson((draft) => {
//       draft.artwork.city = e.target.value;
//     });
//   }

//   function handleImageChange(e) {
//     updatePerson((draft) => {
//       draft.artwork.image = e.target.value;
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input value={person.name} onChange={handleNameChange} />
//       </label>
//       <label>
//         Title:
//         <input value={person.artwork.title} onChange={handleTitleChange} />
//       </label>
//       <label>
//         City:
//         <input value={person.artwork.city} onChange={handleCityChange} />
//       </label>
//       <label>
//         Image:
//         <input value={person.artwork.image} onChange={handleImageChange} />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {" by "}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img src={person.artwork.image} alt={person.artwork.title} />
//     </>
//   );
// }
