import Activities from "@/components/Activities";
import Blogs from "@/components/Blogs";
import Events from "@/components/Events";
import HeroBanner from "@/components/HeroBanner";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <Activities />
      <Events />
      <Blogs />
    </main>
  );
};
export default Home;
