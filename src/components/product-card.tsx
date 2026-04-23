import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block bg-card-bg border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative flex items-center justify-center">
        <span className="text-6xl opacity-30 group-hover:scale-110 transition-transform">
          {product.category === "sets" && "♚"}
          {product.category === "boards" && "▦"}
          {product.category === "pieces" && "♞"}
          {product.category === "clocks" && "⏱"}
          {product.category === "accessories" && "♟"}
        </span>
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded ${
              product.badge === "Sale"
                ? "bg-red-500 text-white"
                : "bg-accent text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded bg-gray-500 text-white">
            Sold Out
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm mb-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted">
            <span className="text-yellow-500">★</span>
            <span>{product.rating}</span>
            <span>({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
