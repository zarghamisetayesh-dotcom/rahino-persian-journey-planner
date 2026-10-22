import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout, PageHeader } from "@/components/Layout";

const schema = z.object({
  name: z.string().trim().min(2, "نام را وارد کنید").max(100),
  email: z.string().trim().email("ایمیل معتبر نیست").max(255),
  phone: z.string().trim().min(6, "شماره تماس را وارد کنید").max(20),
  item: z.string().trim().min(1, "مورد سفر را بنویسید").max(200),
  message: z.string().trim().max(1000).optional(),
});

export const Route = createFileRoute("/booking")({
  validateSearch: (s: Record<string, unknown>) => ({ item: typeof s.item === "string" ? s.item : undefined }),
  head: () => ({
    meta: [
      { title: "درخواست رزرو | راهینو" },
      { name: "description", content: "فرم نمایشی درخواست رزرو سفر در راهینو." },
      { property: "og:title", content: "درخواست رزرو | راهینو" },
      { property: "og:description", content: "درخواست سفر خود را ثبت کنید (نسخه نمایشی)." },
    ],
  }),
  component: Booking,
});

function Booking() {
  const { item } = Route.useSearch();
  const [form, setForm] = useState({ name: "", email: "", phone: "", item: item ?? "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs); return;
    }
    setErrors({}); setSent(true);
  };

  return (
    <Layout>
      <PageHeader title="درخواست رزرو" subtitle="این فرم نمایشی است: اطلاعات ذخیره یا ارسال نمی‌شود و پرداختی انجام نمی‌گیرد." />
      <div className="mx-auto max-w-2xl px-4 mt-10">
        {sent ? (
          <div className="bg-card border rounded-2xl p-8 shadow-soft text-center">
            <span className="demo-badge">نمایشی</span>
            <h2 className="text-2xl font-bold mt-3">درخواست شما (به‌صورت نمایشی) ثبت شد</h2>
            <p className="text-muted-foreground mt-2">این فقط یک نمونه است؛ هیچ رزرو، بلیت یا پرداخت واقعی ایجاد نشده است.</p>
            <button className="btn-primary mt-6" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", item: "", message: "" }); }}>درخواست جدید</button>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-card border rounded-2xl p-6 shadow-soft grid gap-4" noValidate>
            {([["name", "نام و نام خانوادگی"], ["email", "ایمیل"], ["phone", "شماره تماس"], ["item", "مقصد / هتل / سفر مورد نظر"]] as const).map(([k, l]) => (
              <label key={k} className="text-sm">{l}
                <input className="field mt-1" value={form[k]} onChange={set(k)} dir={k === "email" || k === "phone" ? "ltr" : undefined} />
                {errors[k] && <span className="text-destructive text-xs">{errors[k]}</span>}
              </label>
            ))}
            <label className="text-sm">توضیحات
              <textarea className="field mt-1 min-h-28" value={form.message} onChange={set("message")} />
            </label>
            <button className="btn-primary">ارسال درخواست نمایشی</button>
          </form>
        )}
      </div>
    </Layout>
  );
}
