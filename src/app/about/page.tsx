export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">About Checkmate & Co.</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-muted">
        <p className="text-lg leading-relaxed">
          Founded in 2019, Checkmate & Co. started with a simple idea: chess
          deserves beautiful equipment. What began as a curated collection sold
          at local tournaments has grown into one of the most trusted names in
          premium chess retail.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Our Philosophy
        </h2>
        <p className="leading-relaxed">
          We believe the tactile experience of chess matters. The weight of a
          well-turned piece, the grain of a solid wood board, the satisfying
          click of a quality clock — these details elevate a game from casual
          pastime to something meaningful. Every product we carry has been
          personally tested and approved by our team of players and collectors.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Quality Promise
        </h2>
        <p className="leading-relaxed">
          We work directly with craftsmen in India, Italy, and the United States
          to source materials and manufacture products that meet our exacting
          standards. From the boxwood forests of southern India to marble
          quarries in Volterra, we visit our suppliers regularly to ensure
          consistency and fair labor practices.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Our Team
        </h2>
        <p className="leading-relaxed">
          We&apos;re a team of five chess enthusiasts based in Portland, Oregon.
          Between us, we hold three USCF Expert titles and have a combined
          rating of over 10,000 Elo points. More importantly, we genuinely love
          this game and the community around it.
        </p>

        <div className="border-t border-border mt-12 pt-8">
          <blockquote className="text-lg italic text-foreground border-l-4 border-accent pl-6">
            &ldquo;Chess is the gymnasium of the mind.&rdquo;
            <footer className="text-sm text-muted mt-2 not-italic">
              — Blaise Pascal
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
