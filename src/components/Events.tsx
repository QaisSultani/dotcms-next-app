import { fetchGraphQL } from "@/lib/graphql";
import { withLogger } from "@/lib/logger";
import { EVENTS_QUERY } from "@/lib/queries";
import { generateUrl } from "@/lib/utils";
import { EventsData } from "@/types";
import Image from "next/image";

const Events = async () => {
  const data = await withLogger("fetchEvents", () =>
    fetchGraphQL<EventsData>(EVENTS_QUERY)
  );
  const events = data?.calendarEventCollection;
  return (
    <section id="events">
      <div>
        {events?.map((event) => {
          return (
            <article key={event.title}>
              {event?.image?.fileAsset?.versionPath && (
                <Image
                  src={generateUrl(event.image.fileAsset.versionPath)}
                  alt={event.title}
                  width={500}
                  height={500}
                />
              )}
              <p>{event.title}</p>
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Events;
