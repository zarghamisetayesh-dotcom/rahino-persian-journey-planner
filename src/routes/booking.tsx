import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout, PageHeader } from "@/components/Layout";
import { site } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "نام را وارد کنید").max(100),
  email: z.string().trim().email("ایمیل معتبر نیست").max(255),
  phone: z.string().trim().min(6, "شماره تماس را وارد کنید").max(20),
  item: z.string().trim().min(1, "مورد سفر را بنویسید").max(200),
  message: z.string().trim().max(1000).optional(),
});

export const Route = createFileRoute("/booking")({
  validateSearch: (s: Record<string, unknown>): { item?: string } => (typeof s["item"] === "string" ? { item: s["item"] } : {}),
  head: () => ({
    meta: [
      { title: "درخواست رزرو | راهینو" },
      { name: "description", content: "ثبت درخواست رزرو تور و اقامتگاه در راهینو." },
      { property: "og:title", content: "درخواست رزرو | راهینو" },
      { property: "og:description", content: "درخواست سفر خود را ثبت کنید؛ رزرو نقد و اقساط از طریق اپلیکیشن اسنپ." },
    ],
  }),
  component: Booking,
});

function Booking() {
  const { item } = Route.useSearch();
  const [form, setForm] = useState({ name: "", email: "", phone: "", item: item ?? "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs); return;
    }
    setErrors({}); setSendError(""); setSending(true);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "booking", ...form }).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setSendError(`ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید یا با شماره ${site.contact.phone} تماس بگیرید.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <PageHeader title="درخواست رزرو" subtitle={site.snappNotice} />
      <div className="mx-auto max-w-2xl px-4 mt-10">
        {sent ? (
          <div className="bg-card border rounded-2xl p-8 shadow-soft text-center">
            <h2 className="text-2xl font-bold">درخواست شما ثبت شد</h2>
            <p className="text-muted-foreground mt-2">همکاران ما به‌زودی با شما تماس می‌گیرند. {site.snappNotice}</p>
            <p className="text-muted-foreground mt-2">پشتیبانی تورها: <a href={site.contact.phoneHref} dir="ltr" className="text-primary font-bold">{site.contact.phone}</a></p>
            <button className="btn-primary mt-6" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", item: "", message: "" }); }}>درخواست جدید</button>
          </div>
        ) : (
          <form name="booking" onSubmit={submit} className="bg-card border rounded-2xl p-6 shadow-soft grid gap-4" noValidate>
            {([["name", "نام و نام خانوادگی"], ["email", "ایمیل"], ["phone", "شماره تماس"], ["item", "مقصد / هتل / سفر مورد نظر"]] as const).map(([k, l]) => (
              <label key={k} className="text-sm">{l}
                <input className="field mt-1" value={form[k]} onChange={set(k)} dir={k === "email" || k === "phone" ? "ltr" : undefined} />
                {errors[k] && <span className="text-destructive text-xs">{errors[k]}</span>}
              </label>
            ))}
            <label className="text-sm">توضیحات
              <textarea className="field mt-1 min-h-28" value={form.message} onChange={set("message")} />
            </label>
            {sendError && <p className="text-destructive text-sm">{sendError}</p>}
            <button className="btn-primary" disabled={sending}>{sending ? "در حال ارسال…" : "ارسال درخواست"}</button>
          </form>
        )}
      </div>
    </Layout>
  );
}
