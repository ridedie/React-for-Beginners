import React from 'react';
import PropTypes from "prop-types";





// react는 자동적으로 나의 class component의 render method를 실행한다
//JS에서는 다른 onClick이나 이벤트리스너를 등록해야 하지만 react에서는 자동적으로 주어진다.
//setState를 호출하면 react는 state를 refresh하고 render function을 호출
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