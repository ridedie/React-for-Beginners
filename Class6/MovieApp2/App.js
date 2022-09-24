import {useEffect, useState} from "react";
import Movie from "./Movie";

//state로부터 받은 data를 보여준다. (loading, movies)
//state는 그 data를 API로부터 받아온다. (fetch)

//loading이 되었을 때 setLoading을 false로 바꿔주고
//movies를 받아오면 API로부터 얻은 data로 State를 변경한다.
//movies.map을 이용해서 각각의 movie에 접근해서 그 값을 변환할 수 있다.
function App() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
    ).json();
   
    setMovies(json.data.movies);
    setLoading(false);
    
  };
  useEffect (() => {
    getMovies();
  }, []);
  console.log(movies);
  //map은 기존에 있던 배열을 내가 원하는 대로 item이 변형된 새로운 배열을 만들어준다.
  //map을 사용하기 위해서 key를 꼭 줘야한다.
  return (
    <div>
      {loading ? <h1>Loading...</h1>: movies.map(movie => 
        <Movie 
          key={movie.id}
          coverImg={movie.medium.cover.image} 
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
          />
        )}
    </div>
  );
}

export default App;
