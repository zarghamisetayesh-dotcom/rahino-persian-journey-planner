import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { TripSearch } from "@/components/TripSearch";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "جستجوی قطار و پرواز | راهینو" },
      { name: "description", content: "جستجوی نمایشی بلیت قطار و پرواز در راهینو." },
      { property: "og:title", content: "قطار و پرواز | راهینو" },
      { property: "og:description", content: "فرم جستجوی قطار و پرواز با نتایج نمونه." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHeader title="قطار و پرواز" subtitle="نتایج جستجو نمایشی‌اند و بلیتی صادر نمی‌شود." />
      <div className="mx-auto max-w-6xl px-4 mt-10"><TripSearch /></div>
    </Layout>
  ),
});
