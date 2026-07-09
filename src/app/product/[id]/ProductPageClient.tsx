"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import type { Product } from "@/lib/products";

export function ProductPageClient({ product }: { product: Product }) {
  useEffect(() => {
    posthog.capture("product_viewed", {
      product_id: product.id,
      product_name: product.name,
      product_category: product.category,
      price: product.price,
      in_stock: product.inStock,
    });
  }, [product.id, product.name, product.category, product.price, product.inStock]);

  const handleAddToCart = () => {
    posthog.capture("add_to_cart_clicked", {
      product_id: product.id,
      product_name: product.name,
      product_category: product.category,
      price: product.price,
    });
  };

  const handleWishlist = () => {
    posthog.capture("wishlist_clicked", {
      product_id: product.id,
      product_name: product.name,
      product_category: product.category,
      price: product.price,
    });
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`flex-1 py-3 rounded-md font-medium text-sm transition-colors ${
          product.inStock
            ? "bg-accent text-white hover:bg-accent-dark"
            : "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
        }`}
      >
        {product.inStock ? "Add to Cart" : "Sold Out"}
      </button>
      <button
        onClick={handleWishlist}
        className="px-4 py-3 border border-border rounded-md text-sm text-muted hover:text-foreground hover:border-foreground transition-colors"
      >
        ♡ Wishlist
      </button>
    </div>
  );
}
