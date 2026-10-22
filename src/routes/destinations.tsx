import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { DestinationCard } from "@/components/Cards";
import { destinations } from "@/data/site";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "مقصدها | راهینو" },
      { name: "description", content: "مقصدهای نمونه راهینو با قیمت‌های نمایشی." },
      { property: "og:title", content: "مقصدها | راهینو" },
      { property: "og:description", content: "ساحل، کویر، کوه و جنگل — مقصدهای نمونه." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHeader title="مقصدها" subtitle="همه مقصدها و قیمت‌ها نمونه و خیالی هستند." />
      <div className="mx-auto max-w-6xl px-4 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => <DestinationCard key={d.id} d={d} />)}
      </div>
    </Layout>
  ),
});
