"use client";

import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import type { Product } from "@/lib/products";

const categoryLabels: Record<Product["category"], string> = {
  sets: "Chess Sets",
  boards: "Boards",
  pieces: "Pieces",
  clocks: "Clocks",
  accessories: "Accessories",
};

interface CategoryFilterProps {
  validCategory: Product["category"] | undefined;
  productCounts: Record<string, number>;
}

export function CategoryFilter({ validCategory, productCounts }: CategoryFilterProps) {
  const router = useRouter();

  const handleCategoryClick = (category: string | null) => {
    const categoryName = category ? categoryLabels[category as Product["category"]] : "All";
    posthog.capture("shop_category_filtered", {
      category: categoryName,
      category_key: category ?? "all",
      product_count: productCounts[category ?? "all"] ?? 0,
    });
    router.push(category ? `/shop?category=${category}` : "/shop");
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
          !validCategory
            ? "bg-accent text-white border-accent"
            : "border-border text-muted hover:text-foreground"
        }`}
      >
        All
      </button>
      {Object.entries(categoryLabels).map(([key, label]) => (
        <button
          key={key}
          onClick={() => handleCategoryClick(key)}
          className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
            validCategory === key
              ? "bg-accent text-white border-accent"
              : "border-border text-muted hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
