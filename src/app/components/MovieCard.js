import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curlElem) => {
  const { id, type, title, synopsis, genres, releaseYear } = curlElem.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={curlElem.jawSummary.backgroundImage.url || "/dummy.jpg"}
            alt={title}
            width={260}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <h3>TYPE : {type}</h3>
          <h3>GENRE : {genres[0].name}</h3>
          <h3>RELEASE YEAR : {releaseYear}</h3>
          <p>{`${synopsis.substring(0, 66)} ...`}</p>

          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
