// همه متن‌ها، تصاویر و قیمت‌های نمونه سایت از اینجا قابل ویرایش هستند.
import hero from "@/assets/hero.jpg";
import coast from "@/assets/dest-coast.jpg";
import desert from "@/assets/dest-desert.jpg";
import hotel from "@/assets/hotel.jpg";

export const site = {
  name: "راهینو",
  latinName: "Rahino",
  tagline: "سفری آرام، از انتخاب تا رسیدن",
  heroImage: hero,
  demoNotice: "نسخه نمایشی: همه مقصدها، قیمت‌ها و رزروها نمونه و غیرواقعی هستند. هیچ پرداخت یا صدور بلیتی انجام نمی‌شود.",
  contact: {
    phone: "۰۲۱-۰۰۰۰۰۰۰۰ (نمونه)",
    email: "hello@rahino.example",
    address: "تهران، خیابان نمونه، پلاک ۰ (آدرس نمونه)",
    hours: "شنبه تا پنجشنبه، ۹ تا ۱۸",
  },
};

export const destinations = [
  { id: "nilsar", name: "نیل‌سار", region: "ساحل فیروزه‌ای", image: coast, price: "۴٬۸۰۰٬۰۰۰", nights: 3, desc: "صخره‌های سفید و آبی بی‌پایان دریا." },
  { id: "kavirak", name: "کویرک", region: "دشت طلایی", image: desert, price: "۳٬۲۰۰٬۰۰۰", nights: 2, desc: "کاروانسرای قدیمی و غروب‌های آتشین." },
  { id: "abrkooh", name: "ابرکوه سبز", region: "دریاچه کوهستان", image: hero, price: "۵٬۵۰۰٬۰۰۰", nights: 4, desc: "مه صبحگاهی بر دریاچه‌ای آرام." },
  { id: "jangalan", name: "جنگلان", region: "جنگل‌های مه‌آلود", image: hotel, price: "۶٬۱۰۰٬۰۰۰", nights: 3, desc: "اقامت در دل جنگل با چشم‌انداز سبز." },
];

export const hotels = [
  { id: "h1", name: "هتل نمونه آرامیس", city: "نیل‌سار", stars: 5, image: hotel, price: "۲٬۹۰۰٬۰۰۰", features: ["صبحانه", "استخر", "نمای دریا"] },
  { id: "h2", name: "اقامتگاه کاروان", city: "کویرک", stars: 4, image: desert, price: "۱٬۶۰۰٬۰۰۰", features: ["حیاط سنتی", "تور شبانه"] },
  { id: "h3", name: "هتل دریاچه آبی", city: "ابرکوه سبز", stars: 4, image: hero, price: "۲٬۲۰۰٬۰۰۰", features: ["قایق‌سواری", "رستوران"] },
  { id: "h4", name: "کلبه‌های سپیدار", city: "جنگلان", stars: 3, image: coast, price: "۱٬۲۰۰٬۰۰۰", features: ["شومینه", "پارکینگ"] },
];

export const cities = ["تهران", "نیل‌سار", "کویرک", "ابرکوه سبز", "جنگلان"];

export const sampleTrips = {
  train: [
    { company: "قطار نمونه ستاره", depart: "۰۸:۳۰", arrive: "۱۴:۱۰", price: "۸۵۰٬۰۰۰", cls: "کوپه ۴ نفره" },
    { company: "قطار نمونه سپید", depart: "۲۱:۰۰", arrive: "۰۵:۴۰", price: "۱٬۲۰۰٬۰۰۰", cls: "تخت‌خواب" },
  ],
  flight: [
    { company: "هواپیمایی نمونه آسمان", depart: "۰۷:۱۵", arrive: "۰۸:۴۰", price: "۲٬۴۰۰٬۰۰۰", cls: "اکونومی" },
    { company: "هواپیمایی نمونه بال", depart: "۱۶:۰۰", arrive: "۱۷:۳۰", price: "۳٬۱۰۰٬۰۰۰", cls: "اکونومی پلاس" },
  ],
};
