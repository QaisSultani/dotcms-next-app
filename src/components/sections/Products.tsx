import { fetchGraphQL } from "@/lib/fetchGraphql";
import { withLogger } from "@/lib/withLogger";
import { PRODUCTS_QUERY } from "@/constants/queries";
import { generateUrl } from "@/lib/utils";
import { ProductsData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = async () => {
  const data = await withLogger("fetchProducts", () =>
    fetchGraphQL<ProductsData>(PRODUCTS_QUERY)
  );
  const products = data?.ProductCollection;

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section
      id="products"
      className="py-16 bg-muted/30 flex justify-center"
      aria-labelledby="products-heading"
    >
      <div className="container px-4 py-10">
        <div className="text-center mb-12">
          <h2
            id="products-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Recommended Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing Products curated just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {products.map((product) => (
            <article key={product.urlMap} className="group">
              <Link href={generateUrl(product.urlMap)} className="block h-full">
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <figure className="aspect-video relative overflow-hidden flex-grow">
                    {product?.image?.versionPath ? (
                      <Image
                        src={generateUrl(product.image.versionPath)}
                        alt={`${product.title} - Product image showing ${
                          product.category?.[0]?.name || "featured item"
                        }`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">No Image</span>
                      </div>
                    )}
                  </figure>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>

                    {product.category && product.category.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.category.map((cat) => (
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

                    {product.retailPrice && (
                      <div className="text-2xl font-bold text-primary">
                        ${product.retailPrice}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;
