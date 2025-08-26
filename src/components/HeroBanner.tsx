import { fetchGraphQL } from "@/lib/graphql";
import { withLogger } from "@/lib/logger";
import { HERO_BANNER_QUERY } from "@/lib/queries";
import { HeroData } from "@/types";

const HeroBanner = async () => {
  const data = await withLogger("fetchHeroBanner", () => fetchGraphQL<HeroData>(HERO_BANNER_QUERY));
  const hero_banner = data?.BannerCollection;
  return (
    <section>
    </section>
  );
};
export default HeroBanner;
