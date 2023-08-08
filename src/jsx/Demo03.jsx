// let box = (
//   <h1>box</h1>
// )
// import React from "react";

// function DemoA() {
//   return
// }

// export default DemoA;

// import React from "react";

// let view = '<div><h1>hello</h1></div>'

// function DemoA() {
//   return (
//     <div>
//       {view}
//       <div dangerouslySetInnerHTML={{__html:view}}></div>
//     </div>
//   );
// }

// export default DemoA;

import React, { Fragment } from "react";

function Child(props) {
  let { children } = props;
  console.log(props);
  console.log(children);
  return <div>{children}</div>;
}

function DemoA() {
  return (
    <Fragment>
      <Child>你好！</Child>
      <Child>Hello React!</Child>
    </Fragment>
  );
}

export default DemoA;

// export  function Bio() {
//   return (
//     <>
//     <div class="intro">
//       <h1>欢迎来到我的站点！</h1>
//     </div>
//     <p class="summary">
//       你可以在这里了解我的想法。
//       <br></br>
//       <b>还有科学家们的<i>照片</i>！</b>
//     </p>
//     </>
//   );
// }