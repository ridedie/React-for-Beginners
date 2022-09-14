import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import userEvent from "@testing-library/user-event";

//show 버튼을 클릭하면 Hello 함수를 보여준다. 아니라면 null
//useEfect 안에 있는 코드는 한 번만 실행한다.
function Hello() {
  
  useEffect(() => {
    console.log("Hi :)");
    return () => console.log("Bye :(");
  }, []);

  //function를 return한 것일 뿐 위 코드와 다를 것 없다.
  useEffect(function(){
    console.log("Hi :)");
    return function() {
      console.log("Bye :(");
    }
  }, []);
  return <h1>Hello</h1>
}

function App() {

  const [showing, setShowing] = useState(false);

  //버튼을 클릭하면 Hide를 바뀌고 다시 버튼을 클릭하면 Show로 바뀐다.
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      
      {showing ? <Hello /> : null} 
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
