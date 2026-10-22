import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با ما | راهینو" },
      { name: "description", content: "تلفن پشتیبانی تورها و آدرس دفتر راهینو در رشت." },
      { property: "og:title", content: "تماس با راهینو" },
      { property: "og:description", content: "تلفن پشتیبانی و آدرس راهینو." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHeader title="تماس با ما" subtitle={site.snappNotice} />
      <div className="mx-auto max-w-6xl px-4 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[["تلفن پشتیبانی تورها", site.contact.phone], ["آدرس", site.contact.address], ["ساعات کاری", site.contact.hours], ["رزرو نقد و اقساط", "اپلیکیشن اسنپ"]].map(([t, v]) => (
          <div key={t} className="bg-card border rounded-2xl p-6 shadow-soft">
            <div className="text-xs text-muted-foreground">{t}</div>
            <div className="font-bold mt-2 break-words">{v}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12"><Link to="/booking" className="btn-primary">ثبت درخواست سفر</Link></div>
    </Layout>
  ),
});
