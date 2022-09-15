import { useState } from "react";

function App() {

  //State는 직접적으로 수정할 수 없다. 수정하는 함수를 사용
  const [toDo, setToDo] = useState(""); //State
  const [toDos, setToDos] = useState([]); //기본값으로는 비어있는 array
  const onChange = (event) => setToDo(event.target.value); //이벤트 함수(setToDo는 toDo를 변경하는 함수, toDo 값을 변경하면 input값도 변경)
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") { //toDo가 비어있으면 함수가 작동하지 않음
      return;
    }
    
    //... 현재 배열 ToDos를 가져와 toDo를 추가하는 역할을 한다. 
    setToDos(currentArray => [toDo, ...currentArray]); //직전의 값을 받아온다.
    setToDo("");
  }

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
