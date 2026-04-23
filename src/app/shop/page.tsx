import { products, type Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

const categoryLabels: Record<Product["category"], string> = {
  sets: "Chess Sets",
  boards: "Boards",
  pieces: "Pieces",
  clocks: "Clocks",
  accessories: "Accessories",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const validCategory = category as Product["category"] | undefined;

  const filtered =
    validCategory && validCategory in categoryLabels
      ? products.filter((p) => p.category === validCategory)
      : products;

  const title =
    validCategory && validCategory in categoryLabels
      ? categoryLabels[validCategory]
      : "All Products";

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-muted mt-1">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="flex gap-2">
          <a
            href="/shop"
            className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
              !validCategory
                ? "bg-accent text-white border-accent"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            All
          </a>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <a
              key={key}
              href={`/shop?category=${key}`}
              className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                validCategory === key
                  ? "bg-accent text-white border-accent"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
