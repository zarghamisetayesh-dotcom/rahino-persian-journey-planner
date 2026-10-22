import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cities, sampleTrips } from "@/data/site";

type Mode = "train" | "flight";

export function TripSearch() {
  const [mode, setMode] = useState<Mode>("flight");
  const [from, setFrom] = useState(cities[0]);
  const [to, setTo] = useState(cities[1]);
  const [date, setDate] = useState("");
  const [pax, setPax] = useState(1);
  const [results, setResults] = useState<null | { from: string; to: string }>(null);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (from === to) { setError("مبدا و مقصد نمی‌توانند یکسان باشند."); setResults(null); return; }
    setError("");
    setResults({ from, to });
  };

  return (
    <div className="bg-card rounded-2xl shadow-soft border p-5 md:p-6">
      <div className="flex gap-2 mb-5">
        {(["flight", "train"] as Mode[]).map((m) => (
          <button key={m} type="button" onClick={() => { setMode(m); setResults(null); }}
            className={mode === m ? "btn-primary text-sm" : "text-sm px-5 py-2 rounded-xl bg-secondary text-secondary-foreground"}>
            {m === "flight" ? "✈ پرواز" : "🚆 قطار"}
          </button>
        ))}
      </div>
      <form onSubmit={submit} className="grid gap-3 md:grid-cols-5">
        <label className="text-xs text-muted-foreground">مبدا
          <select className="field mt-1" value={from} onChange={(e) => setFrom(e.target.value)}>{cities.map((c) => <option key={c}>{c}</option>)}</select>
        </label>
        <label className="text-xs text-muted-foreground">مقصد
          <select className="field mt-1" value={to} onChange={(e) => setTo(e.target.value)}>{cities.map((c) => <option key={c}>{c}</option>)}</select>
        </label>
        <label className="text-xs text-muted-foreground">تاریخ
          <input type="date" className="field mt-1" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label className="text-xs text-muted-foreground">مسافران
          <input type="number" min={1} max={9} className="field mt-1" value={pax} onChange={(e) => setPax(Math.max(1, Math.min(9, Number(e.target.value) || 1)))} />
        </label>
        <button className="btn-gold self-end h-[42px]">جستجو</button>
      </form>
      {error && <p className="text-destructive text-sm mt-3">{error}</p>}
      {results && (
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="demo-badge">نتایج نمایشی</span>
            <span className="text-muted-foreground">{results.from} ← {results.to} · {pax} مسافر</span>
          </div>
          {sampleTrips[mode].map((t) => (
            <div key={t.company} className="flex flex-wrap items-center justify-between gap-3 border rounded-xl p-4">
              <div>
                <div className="font-bold">{t.company}</div>
                <div className="text-xs text-muted-foreground">{t.cls} · حرکت {t.depart} · رسیدن {t.arrive}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-bold text-primary">{t.price} تومان <span className="text-xs text-muted-foreground">(نمونه)</span></div>
                <Link to="/booking" search={{ item: `${t.company} — ${results.from} به ${results.to}` }} className="btn-primary text-sm">ثبت درخواست</Link>
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">این نتایج ساختگی هستند و بلیت واقعی صادر نمی‌شود.</p>
        </div>
      )}
    </div>
  );
}
