import Link from "next/link";
import { getFeaturedProducts, products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { HeroCTAs } from "./HeroCTAs";

const categories = [
  { name: "Chess Sets", href: "/shop?category=sets", icon: "♚", count: products.filter((p) => p.category === "sets").length },
  { name: "Boards", href: "/shop?category=boards", icon: "▦", count: products.filter((p) => p.category === "boards").length },
  { name: "Pieces", href: "/shop?category=pieces", icon: "♞", count: products.filter((p) => p.category === "pieces").length },
  { name: "Clocks", href: "/shop?category=clocks", icon: "⏱", count: products.filter((p) => p.category === "clocks").length },
  { name: "Accessories", href: "/shop?category=accessories", icon: "♟", count: products.filter((p) => p.category === "accessories").length },
];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Handcrafted for players & collectors
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Every game deserves a beautiful set.
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              From tournament-grade Staunton sets to hand-carved heirloom
              pieces, find the perfect chess set for your style of play.
            </p>
            <HeroCTAs />
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-end pr-20">
          <span className="text-[20rem] leading-none select-none">♛</span>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center p-6 bg-card-bg border border-border rounded-lg hover:shadow-md hover:border-accent transition-all"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <span className="font-medium text-sm">{cat.name}</span>
              <span className="text-xs text-muted">
                {cat.count} {cat.count === 1 ? "item" : "items"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link
            href="/shop"
            className="text-sm text-accent hover:text-accent-dark transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-t border-border bg-card-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">📦</div>
              <h3 className="font-semibold text-sm mb-1">Free Shipping</h3>
              <p className="text-xs text-muted">
                On all orders over $75 within the US
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-sm mb-1">Secure Checkout</h3>
              <p className="text-xs text-muted">
                256-bit SSL encryption on every transaction
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">↩️</div>
              <h3 className="font-semibold text-sm mb-1">30-Day Returns</h3>
              <p className="text-xs text-muted">
                Not satisfied? Return it within 30 days
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
