import { useEffect, useState } from "react";


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
        <div key={movie.id}>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        )}
    </div>
  );
}

export default App;
