import { Link } from "@tanstack/react-router";
import { destinations, hotels, site } from "@/data/site";

type D = (typeof destinations)[number];
type H = (typeof hotels)[number];

export function DestinationCard({ d }: { d: D }) {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-soft border">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={d.image} alt={d.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="demo-badge absolute top-3 right-3">ویژه</span>
      </div>
      <div className="p-5">
        <div className="text-xs text-muted-foreground">{d.region}</div>
        <h3 className="text-xl font-bold mt-1">{d.name}</h3>
        <p className="text-sm text-muted-foreground mt-2">{d.desc}</p>
        <div className="flex items-end justify-between mt-4">
          <div>
            <div className="text-xs text-muted-foreground">{d.nights} شب، از</div>
            <div className="font-bold text-primary">{d.price} تومان</div>
          </div>
          <Link to="/booking" search={{ item: d.name }} className="btn-primary text-sm">درخواست</Link>
        </div>
        <p className="text-xs text-muted-foreground mt-3">{site.snappNotice}</p>
      </div>
    </article>
  );
}

export function HotelCard({ h }: { h: H }) {
  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-soft border flex flex-col sm:flex-row">
      <img src={h.image} alt={h.name} loading="lazy" width={1024} height={768} className="sm:w-56 aspect-[4/3] sm:aspect-auto object-cover" />
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">{h.name}</h3>
          <span className="demo-badge">ویژه</span>
        </div>
        <div className="text-sm text-muted-foreground mt-1">{h.city} · <span className="text-gold">{"★".repeat(h.stars)}</span></div>
        <div className="flex flex-wrap gap-2 mt-3">
          {h.features.map((f) => <span key={f} className="text-xs bg-secondary rounded-full px-3 py-1">{f}</span>)}
        </div>
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div className="font-bold text-primary">{h.price} تومان / شب</div>
          <Link to="/booking" search={{ item: h.name }} className="btn-primary text-sm">درخواست رزرو</Link>
        </div>
        <p className="text-xs text-muted-foreground mt-3">{site.snappNotice}</p>
      </div>
    </article>
  );
}
