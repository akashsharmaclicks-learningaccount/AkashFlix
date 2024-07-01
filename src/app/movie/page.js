import Link from "next/link";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '889f0497d6msh50e0e94e1d07aeap10eae2jsn15607d025807',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curlElem) => {
              return <MovieCard key={curlElem.id} {...curlElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Movie;
