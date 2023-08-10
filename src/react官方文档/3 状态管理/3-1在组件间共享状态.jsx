export default function DemoA() {
  return (
    <>
      <h1>哈萨克斯坦，阿里木图</h1>
      <Pannel title="关于"></Pannel>
      <Pannel title="词源"></Pannel>
    </>
  );
}

function Pannel(title) {
  return (
    <>
      <h3>{ title }</h3>
    </>
  )
}