"use client";

import posthog from "posthog-js";

export function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    posthog.capture("newsletter_signup_submitted");
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
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
  );
}
