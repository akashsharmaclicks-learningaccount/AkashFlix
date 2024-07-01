import Herosection from "../components/Herosection";

const About = () => {
  const paragraph =
    "Embark on a cinematic adventure with us! Our collection spans from captivating award-winning dramas to pulse-pounding blockbuster action films. Dive into our diverse selection of the latest and greatest movies, and uncover your next obsession today.";
  return (
    <Herosection
      title={"OUR STORY"}
      paragraph={paragraph}
      imageUrl={"/about1.svg"}
    />
  );
};

export default About;
