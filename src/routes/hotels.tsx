import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { HotelCard } from "@/components/Cards";
import { hotels } from "@/data/site";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "هتل‌ها | راهینو" },
      { name: "description", content: "فهرست هتل‌های نمونه با قیمت‌های نمایشی." },
      { property: "og:title", content: "هتل‌ها | راهینو" },
      { property: "og:description", content: "اقامتگاه‌های نمونه در مقصدهای راهینو." },
    ],
  }),
  component: Hotels,
});

function Hotels() {
  const [city, setCity] = useState("همه");
  const list = city === "همه" ? hotels : hotels.filter((h) => h.city === city);
  const options = ["همه", ...new Set(hotels.map((h) => h.city))];
  return (
    <Layout>
      <PageHeader title="هتل‌ها" subtitle="اقامتگاه‌های نمونه — قیمت‌ها نمایشی هستند." />
      <div className="mx-auto max-w-6xl px-4 mt-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {options.map((o) => (
            <button key={o} onClick={() => setCity(o)} className={city === o ? "btn-primary text-sm" : "text-sm px-4 py-2 rounded-xl bg-secondary"}>{o}</button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">{list.map((h) => <HotelCard key={h.id} h={h} />)}</div>
      </div>
    </Layout>
  );
}
