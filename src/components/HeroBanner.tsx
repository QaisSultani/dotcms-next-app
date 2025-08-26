import { fetchGraphQL } from "@/lib/graphql";
import { withLogger } from "@/lib/logger";
import { HERO_BANNER_QUERY } from "@/lib/queries";
import { generateUrl } from "@/lib/utils";
import { HeroData } from "@/types";
import Image from "next/image";

const HeroBanner = async () => {
  const data = await withLogger("fetchHeroBanner", () =>
    fetchGraphQL<HeroData>(HERO_BANNER_QUERY)
  );
  const hero_banner = data?.BannerCollection;
  return (
    <section>
      <div>
        {hero_banner?.map((hero) => {
          return (
            <article key={hero.title}>
              {hero?.image?.fileAsset?.versionPath && (
                <Image
                  src={generateUrl(hero.image.fileAsset.versionPath)}
                  alt={hero.title}
                  width={500}
                  height={500}
                />
              )}
              <p>{hero.title}</p>
              <p>{hero.caption}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default HeroBanner;
