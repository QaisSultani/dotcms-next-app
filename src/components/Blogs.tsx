import { fetchGraphQL } from "@/lib/graphql";
import { withLogger } from "@/lib/logger";
import { BLOGS_QUERY } from "@/lib/queries";
import { BlogsData } from "@/types";

const Blogs = async () => {
  const data = await withLogger("fetchBlogs", () => fetchGraphQL<BlogsData>(BLOGS_QUERY));
  const blogs = data?.BlogCollection;
  return (
    <section>
    </section>
  );
};
export default Blogs;
