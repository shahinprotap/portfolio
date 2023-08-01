import FeaturePost from "./FeaturePost";
import CoverPost from "./CoverPost";
import BodyOne from "./BodyOne";
import Service from "./Service";
import { Contact } from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <>
      <FeaturePost />
      <CoverPost />
      <Service />
      <Contact />
      <BodyOne />
      <About />
    </>
  );
};

export default Home;
