import { products, type Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { CategoryFilter } from "./CategoryFilter";

const categoryLabels: Record<Product["category"], string> = {
  sets: "Chess Sets",
  boards: "Boards",
  pieces: "Pieces",
  clocks: "Clocks",
  accessories: "Accessories",
};

const allCategories = Object.keys(categoryLabels) as Product["category"][];

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

  const productCounts: Record<string, number> = {
    all: products.length,
    ...Object.fromEntries(
      allCategories.map((cat) => [cat, products.filter((p) => p.category === cat).length])
    ),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-muted mt-1">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
        </div>

        <CategoryFilter validCategory={validCategory} productCounts={productCounts} />
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
