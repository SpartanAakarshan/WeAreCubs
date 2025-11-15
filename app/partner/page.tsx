export default function PartnerPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h1 className="text-4xl font-black">Partner with Us</h1>
          <p className="text-muted-foreground">
            This page will host the Google Form for partnerships. Replace the link below with your actual Google Form
            URL.
          </p>
          <a
            href="#" /* Replace with your Google Form URL */
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-primary text-foreground px-6 py-3 rounded-md font-bold hover:bg-primary hover:text-primary-foreground"
          >
            Open Partnership Form
          </a>
        </div>
      </section>
    </main>
  )
}


