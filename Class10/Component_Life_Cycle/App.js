import React from 'react';

//Mounting - component의 태어남
//coustructor() js에서 class를 만들 때 호출
//componentDidMount component가 처음 render 될 때 호출됨
//componentDidUpdate component가 업데이트 될 때 호출됨
//componentWillUnmount component가 죽는 것
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  // constructor() {
  //   console.log("hello");
  // }
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log(" I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye. cruel world");
  }
  render() {
    console.log("I am renderring");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;