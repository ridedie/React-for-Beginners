import React from "react";
import PropTypes from "prop-types";

// react는 자동적으로 나의 class component의 render method를 실행한다
//JS에서는 다른 onClick이나 이벤트리스너를 등록해야 하지만 react에서는 자동적으로 주어진다.
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
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