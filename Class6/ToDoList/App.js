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
    setToDos(currentArray => [toDo, ...currentArray]); //함수로 직전의 값을 받아온다.
    setToDo("");
  }

  //map은 안에 함수를 넣을 수 있다. 함수는 내가 return한 값은 새로운 배열에 들어간다
  //하나의 배열에 있는 item을 원하는 무엇이든지 바꿔주는 역할을 한다 그걸 새로운 배열로 return한다, item 자체를 return할 수 있다.
  //list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어야 한다. 즉 배열을 만들어 각자 고유의 key를 가지게 함
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
