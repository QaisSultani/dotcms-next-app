import { fetchGraphQL } from "@/lib/fetchGraphql";
import { withLogger } from "@/lib/withLogger";
import { HERO_BANNER_QUERY } from "@/constants/queries";
import { generateUrl } from "@/lib/utils";
import { HeroData } from "@/types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroBanner = async () => {
  const data = await withLogger("fetchHeroBanner", () =>
    fetchGraphQL<HeroData>(HERO_BANNER_QUERY)
  );
  const hero_banners = data?.BannerCollection;

  if (!hero_banners || hero_banners.length === 0) {
    return null;
  }

  return (
    <section id="hero" className="w-full" aria-label="Hero section slideshow">
      <Carousel
        className="w-full max-w-none"
        opts={{ loop: true, align: "start" }}
      >
        <CarouselContent>
          {hero_banners.map((hero, index) => (
            <CarouselItem key={`${hero.title}-${index}`}>
              <figure className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
                {hero?.image?.fileAsset?.versionPath && (
                  <Image
                    src={generateUrl(hero.image.fileAsset.versionPath)}
                    alt={`Hero section image: ${hero.title}${
                      hero.caption ? ` - ${hero.caption}` : ""
                    }`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

                {/* Content */}
                <figcaption className="absolute inset-0 flex items-center justify-center">
                  <div className="container px-4 text-center text-white">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                      {hero.title}
                    </h2>
                    {hero.caption && (
                      <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        {hero.caption}
                      </p>
                    )}
                  </div>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hero_banners.length > 1 && (
          <>
            <CarouselPrevious
              className="left-4 backdrop-brightness-50 supports-[backdrop-filter]:bg-background/50 hover:bg-white/90 text-black border-white/20"
              aria-label={`Previous slide (${hero_banners.length} slides total)`}
            />
            <CarouselNext
              className="right-4 backdrop-brightness-50 supports-[backdrop-filter]:bg-background/50 hover:bg-white/90 text-black border-white/20"
              aria-label={`Next slide (${hero_banners.length} slides total)`}
            />
          </>
        )}
      </Carousel>
    </section>
  );
};
export default HeroBanner;
