import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card-bg mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">♔</span>
              <span className="font-semibold">Checkmate & Co.</span>
            </div>
            <p className="text-sm text-muted">
              Premium chess sets, boards, and accessories for players and
              collectors since 2019.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Shop</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/shop?category=sets" className="hover:text-foreground transition-colors">
                  Chess Sets
                </Link>
              </li>
              <li>
                <Link href="/shop?category=boards" className="hover:text-foreground transition-colors">
                  Boards
                </Link>
              </li>
              <li>
                <Link href="/shop?category=pieces" className="hover:text-foreground transition-colors">
                  Pieces
                </Link>
              </li>
              <li>
                <Link href="/shop?category=clocks" className="hover:text-foreground transition-colors">
                  Clocks
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Stay in Touch</h3>
            <p className="text-sm text-muted mb-3">
              Get notified about new arrivals and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Checkmate & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
