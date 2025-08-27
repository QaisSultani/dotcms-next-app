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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dotcms.com/#organization",
        name: "dotCMS",
        url: "https://dotcms.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://dotcms.com/logo.png",
          width: 200,
          height: 60,
        },
      },
      {
        "@type": "WebSite",
        "@id": "/#website",
        url: "/",
        name: "Real-World NextJS App with dotCMS",
        description:
          "Discover amazing products, events, and experiences. Join our community for unforgettable adventures and lasting memories.",
        publisher: {
          "@id": "https://dotcms.com/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <h1 className="sr-only">Real-World NextJS App with dotCMS - Home</h1>
      <HeroBanner />
      <Products />
      <Events />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
