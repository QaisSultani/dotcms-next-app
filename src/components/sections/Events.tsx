"use client";

import { fetchGraphQL } from "@/lib/fetchGraphql";
import { withLogger } from "@/lib/withLogger";
import { EVENTS_QUERY } from "@/constants/queries";
import { generateUrl } from "@/lib/utils";
import { EventsData } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import EventsSkeleton from "@/components/shared/EventsSkeleton";

const Events = () => {
  const [events, setEvents] = useState<
    EventsData["calendarEventCollection"] | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await withLogger("fetchHeroBanner", () =>
        fetchGraphQL<EventsData>(EVENTS_QUERY)
      );
      const events_list = data?.calendarEventCollection;

      if (!events_list || events_list.length === 0) {
        setEvents([]);
        setLoading(false);
        return;
      }
      setEvents(events_list);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <EventsSkeleton />;
  }

  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section id="events" className="py-16 flex justify-center">
      <div className="container px-4 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting events and memorable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card
              key={`${event.title}-${index}`}
              className="overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 pt-0"
            >
              <div className="aspect-square relative overflow-hidden">
                {event?.image?.fileAsset?.versionPath ? (
                  <Image
                    src={generateUrl(event.image.fileAsset.versionPath)}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">No Image</span>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <div
                  className="text-muted-foreground line-clamp-5 text-sm"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
