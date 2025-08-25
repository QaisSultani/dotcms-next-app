import Activities from "@/components/Activities";
import Blogs from "@/components/Blogs";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Activities />
        <Events />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
