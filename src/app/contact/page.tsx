export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-muted mb-8">
        Have a question about a product, your order, or just want to talk chess?
        We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <select
              id="subject"
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm"
            >
              <option>Order inquiry</option>
              <option>Product question</option>
              <option>Wholesale inquiry</option>
              <option>Returns & exchanges</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-accent text-white rounded-md font-medium hover:bg-accent-dark transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-sm mb-1">Email</h3>
            <p className="text-sm text-muted">hello@checkmateandco.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Phone</h3>
            <p className="text-sm text-muted">(503) 555-0142</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Hours</h3>
            <p className="text-sm text-muted">
              Mon–Fri: 9am–6pm PST
              <br />
              Sat: 10am–4pm PST
              <br />
              Sun: Closed
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Address</h3>
            <p className="text-sm text-muted">
              Checkmate & Co.
              <br />
              412 NW Everett St
              <br />
              Portland, OR 97209
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
