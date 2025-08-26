import { fetchGraphQL } from "@/lib/fetchGraphql";
import { withLogger } from "@/lib/withLogger";
import { ACTIVITIES_QUERY } from "@/constants/queries";
import { generateUrl } from "@/lib/utils";
import { ActivitiesData } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Activities = async () => {
  const data = await withLogger("fetchActivities", () =>
    fetchGraphQL<ActivitiesData>(ACTIVITIES_QUERY)
  );
  const activites = data?.ProductCollection;
  return (
    <section id="activities">
      <div>
        {activites?.map((activity) => {
          return (
            <article key={activity.urlMap}>
              <Link href={generateUrl(activity.urlMap)}>
                {activity?.image?.versionPath && (
                  <Image
                    src={generateUrl(activity.image.versionPath)}
                    alt={activity.title}
                    width={500}
                    height={500}
                  />
                )}
                <p>{activity.title}</p>
                {activity.category.map((cat) => (
                  <span key={cat.name}>{cat.name}</span>
                ))}
                <p>{activity.retailPrice}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Activities;
