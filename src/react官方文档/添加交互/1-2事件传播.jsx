export default function DemoA() {
  return (
    <>
      <div
        onClick={() => {
          console.log("div被触发了");
        }}
        style={{ backgroundColor: "yellow" }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("btn1被触发了");
          }}
        >
          btn1
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("btn2被触发了");
          }}
        >
          btn2
        </button>
      </div>
    </>
  );
}
