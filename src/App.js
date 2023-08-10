// import DemoA from "./jsx/Demo03";
// import DemoA from './state/Demo01'
// import DemoA from './condition/Demo02'
// import DemoA from "./react官方文档/添加交互/事件处理函数.jsx";
// import DemoA from "./react官方文档/添加交互/1-2事件传播.jsx";
// import DemoA from "./react官方文档/添加交互/2-1State：组件的记忆.jsx";
// import DemoA from "./react官方文档/添加交互/3-1渲染和提交.jsx";
// import DemoA from "./react官方文档/添加交互/4-1state 如同一张快照.jsx";
// import DemoA from "./react官方文档/添加交互/5-1把一系列 state 更新加入队列";
// import DemoA from "./react官方文档/添加交互/5-2修复请求计数器";
// import DemoA from "./react官方文档/添加交互/6-1更新state中的对象";
// import DemoA from "./react官方文档/添加交互/6-2使用useImmer代替useState.jsx";
// import DemoA from "./react官方文档/添加交互/6-3-1修复错误的 state 更新代码";
// import DemoA from "./react官方文档/添加交互/6-3-2发现并修复 mutation.jsx";
// import DemoA from "./react官方文档/添加交互/7-1更新state中的数组-替换数组中的元素";
// import DemoA from "./react官方文档/2 添加交互/7-2更新state中的数组-向数组中插入元素";
// import DemoA from "./react官方文档/3 状态管理/1-1 用state响应输入";
// import DemoA from "./react官方文档/3 状态管理/1-2-2个人信息编辑器 .jsx";
import  DemoA  from "./react官方文档/3 状态管理/3-1在组件间共享状态";

function App() {
  return (
    <>
      <DemoA a="1" b="2"></DemoA>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <DemoA a="1" b="2"></DemoA>
    </>
  );
}

export default App;
