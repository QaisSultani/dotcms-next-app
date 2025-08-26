import { fetchGraphQL } from "@/lib/graphql";
import { withLogger } from "@/lib/logger";
import { ACTIVITIES_QUERY } from "@/lib/queries";
import { ActivitiesData } from "@/types";

const Activities = async () => {
  const data = await withLogger("fetchActivities", () => fetchGraphQL<ActivitiesData>(ACTIVITIES_QUERY));
  const activites = data?.ProductCollection;
  return (
    <section>
    </section>
  );
};
export default Activities;
