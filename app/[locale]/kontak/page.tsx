"use client";

import { useTranslations } from "next-intl";

export default function KontakPage() {
  const t = useTranslations("contact");

  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">{t("hero.title")}</h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Info */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h2 className="mb-8 text-3xl font-bold">
              {t("info.title")}
            </h2>

            <div className="space-y-6 text-lg">
              <div>
                <h3 className="font-bold">📍 {t("info.office")}</h3>
                <p>
                  The Hive Cendana Spark N105
                  <br />
                  Lippo Cikarang
                  <br />
                  Bekasi
                </p>
              </div>

              <div>
                <h3 className="font-bold">📞 WhatsApp</h3>
                <a
                  href="https://wa.me/6281255558283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  +62 812-5555-8283
                </a>
              </div>

              <div>
                <h3 className="font-bold">✉️ Email</h3>
                <p>pandawaglobalindustri@gmail.com</p>
              </div>

              <div>
                <h3 className="font-bold">🕘 {t("info.hours")}</h3>
                <p>
                  {t("info.day")}
                  <br />
                  08.30 - 17.30 WIB
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h2 className="mb-8 text-3xl font-bold">
              {t("form.title")}
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder={t("form.name")}
                className="w-full rounded-xl border px-5 py-4"
              />

              <input
                type="email"
                placeholder={t("form.email")}
                className="w-full rounded-xl border px-5 py-4"
              />

              <input
                type="text"
                placeholder={t("form.phone")}
                className="w-full rounded-xl border px-5 py-4"
              />

              <textarea
                rows={6}
                placeholder={t("form.message")}
                className="w-full rounded-xl border px-5 py-4"
              />

              <button className="w-full rounded-xl bg-yellow-400 py-4 font-bold transition hover:bg-yellow-300">
                {t("form.button")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=The+Hive+Cendana+Spark+Lippo+Cikarang&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}