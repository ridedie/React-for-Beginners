import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";


//state로부터 받은 data를 보여준다. (loading, movies)
//state는 그 data를 API로부터 받아온다. (fetch)

//loading이 되었을 때 setLoading을 false로 바꿔주고
//movies를 받아오면 API로부터 얻은 data로 State를 변경한다.
//movies.map을 이용해서 각각의 movie에 접근해서 그 값을 변환할 수 있다.
//map은 기존에 있던 배열을 내가 원하는 대로 item이 변형된 새로운 배열을 만들어준다.
//map을 사용하기 위해서 key를 꼭 줘야한다
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);
    return (
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
          <span>Loading...</span>
      </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
  export default Home;