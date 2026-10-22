import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره ما | راهینو" },
      { name: "description", content: "داستان راهینو، همراه سفرهای آرام." },
      { property: "og:title", content: "درباره راهینو" },
      { property: "og:description", content: "با تیم و ارزش‌های راهینو آشنا شوید." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHeader title="درباره راهینو" />
      <div className="mx-auto max-w-6xl px-4 mt-12 grid gap-10 md:grid-cols-2 items-center">
        <img src={site.heroImage} alt="منظره سفر" loading="lazy" width={1920} height={1088} className="rounded-2xl shadow-soft aspect-[4/3] object-cover" />
        <div className="space-y-4 leading-8 text-muted-foreground">
          <p>راهینو با این باور شکل گرفت که برنامه‌ریزی سفر باید به آرامی خودِ سفر باشد. ما قطار، پرواز و اقامت را در یک تجربه ساده کنار هم گذاشته‌ایم.</p>
          <p>راهینو با اسنپ‌تریپ همکاری می‌کند؛ {site.snappNotice}</p>
          <div className="grid grid-cols-3 gap-4 pt-4 text-center">
            {[["۵", "مقصد ویژه"], ["نقد و اقساط", "از طریق اسنپ"], ["۱", "هدف: سفر آرام"]].map(([n, l]) => (
              <div key={l} className="bg-secondary rounded-xl p-4"><div className="text-2xl font-black text-primary">{n}</div><div className="text-xs">{l}</div></div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  ),
});
