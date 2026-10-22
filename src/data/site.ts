import hero from "@/assets/hero.jpg";
import coast from "@/assets/dest-coast.jpg";
import desert from "@/assets/dest-desert.jpg";
import hotel from "@/assets/hotel.jpg";

export const site = {
  name: "راهینو",
  latinName: "Rahino",
  tagline: "سفری آرام، از انتخاب تا رسیدن",
  heroImage: hero,
  snappNotice: "برای رزرو تور یا اقامتگاه به‌صورت نقد و اقساط به اپلیکیشن اسنپ مراجعه کنید.",
  tourNotice: {
    lines: [
      "تمام رزرو تورها و سفرها از طریق اپلیکیشن اسنپ قابل رزرو است.",
      "تمام سفرها به‌صورت نقد و اقساط است.",
      "برای ثبت درخواست و دیدن لیست به‌روز سفرها به واتساپ پیام دهید یا به اپلیکیشن اسنپ مراجعه فرمایید.",
    ],
    latestTitle: "آخرین تور در حال انجام: ۲ آبان تا ۶ آبان",
    latestDetails: "(تور رشت / قطار ۵ ستاره فدک / همراه با صبحانه / بازدید از مکان‌های گردشگری)",
    warning: "توجه: ظرفیت تور رشت (۲ تا ۶ آبان) تکمیل شد.",
  },
  contact: {
    phone: "۰۹۱۰۲۲۸۶۹۵۸",
    phoneHref: "tel:09102286958",
    address: "رشت، بلوار میدان غزنوی، برج گلسار، طبقه ۳",
    hours: "شنبه تا پنجشنبه، ۹ تا ۱۸",
  },
};

export const destinations = [
  { id: "kavir", name: "کویر", region: "کویر مرکزی ایران", image: desert, price: "۳٬۲۰۰٬۰۰۰", nights: 2, desc: "شب‌های پرستاره، شترسواری و اقامت در کاروانسرا." },
  { id: "rasht", name: "رشت", region: "استان گیلان", image: hero, price: "۴٬۵۰۰٬۰۰۰", nights: 4, desc: "طبیعت سرسبز شمال، غذاهای محلی و بازار رشت." },
  { id: "mashhad", name: "مشهد", region: "استان خراسان رضوی", image: hotel, price: "۵٬۲۰۰٬۰۰۰", nights: 3, desc: "زیارت حرم امام رضا (ع) و اقامت در هتل‌های نزدیک حرم." },
  { id: "qeshm", name: "ساحل قشم", region: "استان هرمزگان", image: coast, price: "۶٬۴۰۰٬۰۰۰", nights: 3, desc: "دره ستارگان، جنگل حرا و ساحل‌های خلیج فارس." },
  { id: "kish", name: "کیش", region: "جزیره کیش", image: coast, price: "۶٬۹۰۰٬۰۰۰", nights: 3, desc: "ساحل مرجانی، تفریحات آبی و مراکز خرید." },
];

export const hotels = [
  { id: "h1", name: "هتل ساحلی کیش", city: "کیش", stars: 5, image: hotel, price: "۲٬۹۰۰٬۰۰۰", features: ["صبحانه", "استخر", "نمای دریا"] },
  { id: "h2", name: "اقامتگاه بوم‌گردی کویر", city: "کویر", stars: 4, image: desert, price: "۱٬۶۰۰٬۰۰۰", features: ["حیاط سنتی", "تور شبانه"] },
  { id: "h3", name: "هتل نزدیک حرم", city: "مشهد", stars: 4, image: hero, price: "۲٬۲۰۰٬۰۰۰", features: ["نزدیک حرم", "رستوران"] },
  { id: "h4", name: "اقامتگاه ساحلی قشم", city: "قشم", stars: 3, image: coast, price: "۱٬۲۰۰٬۰۰۰", features: ["نمای دریا", "پارکینگ"] },
];

export const cities = ["تهران", "رشت", "مشهد", "کیش", "قشم", "اصفهان", "شیراز", "تبریز", "یزد", "بندرعباس"];

export const trips = {
  train: [
    { company: "قطار روزانه", depart: "۰۸:۳۰", arrive: "۱۴:۱۰", price: "۸۵۰٬۰۰۰", cls: "کوپه ۴ نفره" },
    { company: "قطار شبانه", depart: "۲۱:۰۰", arrive: "۰۵:۴۰", price: "۱٬۲۰۰٬۰۰۰", cls: "تخت‌خواب" },
  ],
  flight: [
    { company: "پرواز صبح", depart: "۰۷:۱۵", arrive: "۰۸:۴۰", price: "۲٬۴۰۰٬۰۰۰", cls: "اکونومی" },
    { company: "پرواز عصر", depart: "۱۶:۰۰", arrive: "۱۷:۳۰", price: "۳٬۱۰۰٬۰۰۰", cls: "اکونومی پلاس" },
  ],
};
