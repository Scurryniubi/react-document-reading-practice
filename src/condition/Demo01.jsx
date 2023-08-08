import React from "react";

class DemoA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      num:1
    };
  }
  add() {
    console.log(this);
    this.setState(({ num }) => {
      console.log(num);
    })
  }

  render() {
    let { flag,num } = this.state;
    return (
      <div>
        <h2>类组件</h2>
        {/* <button onClick={() => this.setState((_)=>({flag:!_.flag}))}>
          切换
        </button> */}
        <button onClick={() => this.setState(_=>({ flag: !_.flag }))}>
          通过display控制显示隐藏
        </button>
        <button onClick={()=>this.add()}>nums+1</button>
        {/* {flag ? <div>hello</div> : <div>world</div>} */}
        <div style={{ display : flag? 'block' : 'none' }}>hello world</div>
      </div>
    );
  }
}

export default DemoA;
