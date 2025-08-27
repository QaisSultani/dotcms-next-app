import dynamic from "next/dynamic";
import Products from "@/components/sections/Products";
import HeroBanner from "@/components/sections/HeroBanner";
import EventsSkeleton from "@/components/shared/EventsSkeleton";
import BlogsSkeleton from "@/components/shared/BlogsSkeleton";
import FooterSkeleton from "@/components/shared/FooterSkeleton";

const Events = dynamic(() => import("@/components/sections/Events"), {
  loading: () => <EventsSkeleton />,
  ssr: true,
});

const Blogs = dynamic(() => import("@/components/sections/Blogs"), {
  loading: () => <BlogsSkeleton />,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <FooterSkeleton />,
  ssr: true,
});

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Products />
      <Events />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
