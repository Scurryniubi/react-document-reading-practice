// import { Component } from "react";

// class DemoA extends Component {
//     constructor() {
//         super()

//         console.log('constructor...');
//     }
//     componentDidMount() {
//         console.log('componentDidMount... ');
//     }
//     render() {
//         console.log('render...');
//         return (
//             <h1>我是类组件</h1>
//         )
//     }
// }
// class DemoA extends Component {
//     constructor() {
//         super()
//         this.state = {
//             counter:1
//         }
//     }
//     add() {
//         this.setState({
//             counter:this.state.counter+1
//         })
//     }
//     componentDidMount() {
//         console.log(this.refs.span);
//     }
//     render() {
//         let { a, b } = this.props
//         console.log(a,b);
//         return (
//             <div>
//                 <h3>{this.state.counter}</h3>
//                 <button onClick={() => this.add()}>state+1</button>
//                 <span ref='span'>66</span>
//             </div>

//         )
//     }
// }

// import { useState } from "react";

// function DemoA() {
//   let [counter, setCounter] = useState(1);
//   return (
//     <div>
//       <h1>函数式组件 --- { counter }</h1>
//       <button onClick={()=>setCounter(counter+1)} >+1</button>
//     </div>
//   );
// }

// export default DemoA;
