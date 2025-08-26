import { fetchGraphQL } from "@/lib/fetchGraphql";
import { withLogger } from "@/lib/withLogger";
import { BLOGS_QUERY } from "@/constants/queries";
import { generateUrl } from "@/lib/utils";
import { BlogsData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

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
                  {blog.teaser}...<Button>Read More +</Button>
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
