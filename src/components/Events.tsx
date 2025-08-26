import { fetchGraphQL } from "@/lib/graphql";
import { withLogger } from "@/lib/logger";
import { EVENTS_QUERY } from "@/lib/queries";
import { EventsData } from "@/types";

const Events = async () => {
  const data = await withLogger("fetchEvents", () => fetchGraphQL<EventsData>(EVENTS_QUERY));
  const events = data?.calendarEventCollection;
  return (
    <section>
    </section>
  );
};
export default Events;
