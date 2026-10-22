import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { DestinationCard } from "@/components/Cards";
import { destinations, site } from "@/data/site";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "مقصدها | راهینو" },
      { name: "description", content: "تورهای کویر، رشت، مشهد، ساحل قشم و کیش با راهینو." },
      { property: "og:title", content: "مقصدها | راهینو" },
      { property: "og:description", content: "کویر، رشت، مشهد، ساحل قشم و کیش." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHeader title="مقصدها" subtitle={site.snappNotice} />
      <div className="mx-auto max-w-6xl px-4 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => <DestinationCard key={d.id} d={d} />)}
      </div>
      <section className="mx-auto max-w-6xl px-4 mt-12">
        <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-4">
          <ul className="space-y-2 text-foreground leading-8">
            {site.tourNotice.lines.map((l) => <li key={l}>• {l}</li>)}
          </ul>
          <div className="border-t pt-4">
            <p className="font-bold text-primary">{site.tourNotice.latestTitle}</p>
            <p className="text-muted-foreground mt-1">{site.tourNotice.latestDetails}</p>
          </div>
          <p className="rounded-lg bg-destructive/10 text-destructive font-bold px-4 py-3">
            {site.tourNotice.warning}
          </p>
        </div>
      </section>
    </Layout>
  ),
});
