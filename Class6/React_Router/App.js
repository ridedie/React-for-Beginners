import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// Switch는 Route(URL)를 찾고, 찾으면 컴포넌트를 렌더링한다.
//누군가 웹사이트의 "/" URL이 있다면 Home 컴포넌트를 보여준다.
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Movie">
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
