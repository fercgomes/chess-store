"use client";

import Link from "next/link";
import posthog from "posthog-js";

export function HeroCTAs() {
  return (
    <div className="flex gap-4">
      <Link
        href="/shop"
        onClick={() => posthog.capture("hero_cta_clicked", { cta_label: "Shop Collection" })}
        className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-md font-medium transition-colors"
      >
        Shop Collection
      </Link>
      <Link
        href="/about"
        onClick={() => posthog.capture("hero_cta_clicked", { cta_label: "Our Story" })}
        className="px-6 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-md font-medium transition-colors"
      >
        Our Story
      </Link>
    </div>
  );
}
