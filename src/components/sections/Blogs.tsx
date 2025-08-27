import { fetchGraphQL } from "@/lib/fetchGraphql";
import { withLogger } from "@/lib/withLogger";
import { BLOGS_QUERY } from "@/constants/queries";
import { generateUrl } from "@/lib/utils";
import { BlogsData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Blogs = async () => {
  const data = await withLogger("fetchBlogs", () =>
    fetchGraphQL<BlogsData>(BLOGS_QUERY)
  );
  const blogs = data?.BlogCollection;
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section
      id="blogs"
      className="py-16 bg-muted/30 flex justify-center"
      aria-labelledby="blogs-heading"
    >
      <div className="container px-4 py-10">
        <div className="text-center mb-12">
          <h2
            id="blogs-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest insights, tips, and stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article key={blog?.urlMap} className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 pt-0 h-full">
                <figure className="aspect-video relative overflow-hidden">
                  {blog?.image?.fileAsset?.versionPath ? (
                    <Image
                      src={generateUrl(blog?.image?.fileAsset?.versionPath)}
                      alt={`Featured image for blog post: ${blog?.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">No Image</span>
                    </div>
                  )}
                </figure>

                {blog?.title && (
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <h3>{blog.title}</h3>
                    </CardTitle>
                  </CardHeader>
                )}

                <CardContent className="flex flex-col justify-around flex-grow">
                  {blog?.teaser && (
                    <p className="text-muted-foreground line-clamp-2 mb-4 text-sm">
                      {blog.teaser}...
                    </p>
                  )}

                  <Link href={generateUrl(blog?.urlMap)}>
                    <Button variant="outline" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
