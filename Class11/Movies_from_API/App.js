import React from 'react';
import axios from "axios";

class App extends React.Component {
  
  state = {
    isLoading: true
  };
  componentDidMount() {
    const movies = axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;