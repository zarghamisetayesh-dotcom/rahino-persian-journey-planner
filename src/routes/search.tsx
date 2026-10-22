import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { TripSearch } from "@/components/TripSearch";
import { site } from "@/data/site";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "جستجوی قطار و پرواز | راهینو" },
      { name: "description", content: "جستجوی بلیت قطار و پرواز بین شهرهای ایران در راهینو." },
      { property: "og:title", content: "قطار و پرواز | راهینو" },
      { property: "og:description", content: "جستجوی قطار و پرواز بین شهرهای ایران." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHeader title="قطار و پرواز" subtitle={site.snappNotice} />
      <div className="mx-auto max-w-6xl px-4 mt-10"><TripSearch /></div>
    </Layout>
  ),
});
