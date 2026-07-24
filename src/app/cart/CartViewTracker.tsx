"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function CartViewTracker() {
  useEffect(() => {
    posthog.capture("cart_viewed");
  }, []);

  return null;
}
