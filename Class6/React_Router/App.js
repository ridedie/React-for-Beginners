import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// Switch는 Route(URL)를 찾고, 찾으면 컴포넌트를 렌더링한다.
//누군가 웹사이트의 "/" URL이 있다면 Home 컴포넌트를 보여준다.
// ex) URL 뒤에 /Movie를 붙힌다면 Detail 페이지로 넘어간다.
//"Movie/:id"에서 :를 붙히지 않으면 텍스트로 인식한다.
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Movie/:id">
          <Detail />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
  
}

export default App;
