import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  // 리액트 앱으로 하는 중이라 앞에 React를 안붙여도 됨
  //state가 변경될 때 마다 모든 코드들이 전부 실행됨, 이 문제는 useEffect가 해결해줌
  const [counter, setValue] = useState(0);
  //value가 있는 keyword를 input의 value로 사용하면 원할 때 input를 조작할 수 있다.
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  //이벤트를 발생시킨 input에서 value를 받아서  keyword state에 넣어준다.
  const onChange = (event) => setKeyword(event.target.value);


  //한 번 실행하고 다신 실행하지 않는 함수
  useEffect (() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 6) {
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]); //keyword가 변화할 때마다 코드를 실행한다

  useEffect (() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect (() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here.." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
