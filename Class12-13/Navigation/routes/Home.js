import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// state를 갖기 위해 class component를 가질 필요가 없다. react hook 때문이다.
// react hook은 다른 방식이고 대체물이 아니다 
class Home extends React.Component {
  
  state = {
    isLoading: true
  };
  getMovies = async () => {
    //async await - axios가 끝날 때까지 기다렸다가 계속한다.
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
      {isLoading
        ? (<div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            ))}
          </div>
          )}
      </section>
    );
  }
}

export default Home; 