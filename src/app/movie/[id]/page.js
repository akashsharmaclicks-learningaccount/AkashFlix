import styles from "@/app/styles/common.module.css";
import Image from "next/image";
const Page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "889f0497d6msh50e0e94e1d07aeap10eae2jsn15607d025807",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Akashflix \ <span>{main_data.type}</span>
        </h2>
        <div className={styles.card_section}>
          <div>
            <Image
              src={main_data.backgroundImage.url || "/dummy.jpg"}
              alt={main_data.title}
              width={848}
              height={477}
            />
          </div>
          <div>
            <h1>{main_data.title}</h1>
            <h3>TYPE: {main_data.type}</h3>
            <h3>GENRE: {main_data.genres[0].name}</h3>
            <h3>RELEASED ON: {main_data.releaseYear}</h3>

            <p>{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
