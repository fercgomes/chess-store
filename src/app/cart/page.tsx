import Link from "next/link";

export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="text-center py-16 border border-dashed border-border rounded-lg">
        <span className="text-5xl mb-4 block">♟</span>
        <p className="text-muted mb-2">Your cart is empty</p>
        <p className="text-sm text-muted mb-6">
          Looks like you haven&apos;t added any pieces to your collection yet.
        </p>
        <Link
          href="/shop"
          className="inline-block px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent-dark transition-colors"
        >
          Browse Collection
        </Link>
      </div>
    </div>
  );
}
