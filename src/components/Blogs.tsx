import { fetchGraphQL } from "@/lib/graphql";
import { withLogger } from "@/lib/logger";
import { BLOGS_QUERY } from "@/lib/queries";
import { generateUrl } from "@/lib/utils";
import { BlogsData } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Blogs = async () => {
  const data = await withLogger("fetchBlogs", () =>
    fetchGraphQL<BlogsData>(BLOGS_QUERY)
  );
  const blogs = data?.BlogCollection;
  return (
    <section id="blogs">
      <div>
        {blogs?.map((blog) => {
          return (
            <article key={blog.urlMap}>
              <Link href={generateUrl(blog.urlMap)}>
                {blog?.image?.fileAsset?.versionPath && (
                  <Image
                    src={generateUrl(blog.image.fileAsset.versionPath)}
                    alt={blog.title}
                    width={500}
                    height={500}
                  />
                )}
                <p>{blog.title}</p>
                <p>
                  {blog.teaser}...<span>Read More +</span>
                </p>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Blogs;
