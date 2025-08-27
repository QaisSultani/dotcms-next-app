import { fetchGraphQL } from "@/lib/fetchGraphql";
import { withLogger } from "@/lib/withLogger";
import { ACTIVITIES_QUERY } from "@/constants/queries";
import { generateUrl } from "@/lib/utils";
import { ActivitiesData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Activities = async () => {
  const data = await withLogger("fetchActivities", () =>
    fetchGraphQL<ActivitiesData>(ACTIVITIES_QUERY)
  );
  const activities = data?.ProductCollection;

  if (!activities || activities.length === 0) {
    return null;
  }

  return (
    <section id="activities" className="py-16 bg-muted/30 flex justify-center">
      <div className="container px-4 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recommended Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing activities and experiences curated just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {activities.map((activity) => (
            <Link
              href={generateUrl(activity.urlMap)}
              key={activity.urlMap}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden flex-grow">
                  {activity?.image?.versionPath ? (
                    <Image
                      src={generateUrl(activity.image.versionPath)}
                      alt={activity.title}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">No Image</span>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>

                  {activity.category && activity.category.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity.category.map((cat) => (
                        <Badge
                          key={cat.inode}
                          variant="secondary"
                          className="text-xs"
                        >
                          {cat.name}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {activity.retailPrice && (
                    <div className="text-2xl font-bold text-primary">
                      ${activity.retailPrice}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
