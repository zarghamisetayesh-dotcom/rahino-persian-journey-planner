import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { TripSearch } from "@/components/TripSearch";
import { DestinationCard, HotelCard } from "@/components/Cards";
import { destinations, hotels, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "راهینو | رزرو سفر، قطار، پرواز و هتل" },
      { name: "description", content: "راهینو؛ وب‌سایت نمایشی رزرو سفر با جستجوی قطار و پرواز، مقصدها و هتل‌های نمونه." },
      { property: "og:title", content: "راهینو | رزرو سفر" },
      { property: "og:description", content: "جستجوی قطار، پرواز و هتل در یک تجربه آرام و زیبا (نسخه نمایشی)." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="relative h-[560px] md:h-[620px]">
        <img src={site.heroImage} alt="دریاچه کوهستانی" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-4 h-full flex flex-col justify-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-2xl">{site.tagline}</h1>
          <p className="mt-4 text-lg opacity-90 max-w-xl">قطار، پرواز و هتل را در یک جا جستجو کنید.</p>
          <div className="mt-6"><Link to="/destinations" className="btn-gold">کشف مقصدها</Link></div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 -mt-20 relative z-10"><TripSearch /></div>

      <section className="mx-auto max-w-6xl px-4 mt-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-black">مقصدهای محبوب</h2>
          <Link to="/destinations" className="text-sm text-primary font-semibold">همه ←</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => <DestinationCard key={d.id} d={d} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 mt-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-black">هتل‌های پیشنهادی</h2>
          <Link to="/hotels" className="text-sm text-primary font-semibold">همه ←</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {hotels.slice(0, 2).map((h) => <HotelCard key={h.id} h={h} />)}
        </div>
      </section>
    </Layout>
  );
}
