"use client";

import { useTranslations } from "next-intl";

export default function TentangPage() {
  const t = useTranslations("about");

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

      {/* Company */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              {t("company.title")}
            </h2>

            <p className="leading-8 text-gray-700">
              {t("company.desc1")}
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              {t("company.desc2")}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="mb-8 text-3xl font-bold">
              {t("why.title")}
            </h3>

            <ul className="space-y-5">
              <li>✅ {t("why.item1")}</li>
              <li>✅ {t("why.item2")}</li>
              <li>✅ {t("why.item3")}</li>
              <li>✅ {t("why.item4")}</li>
              <li>✅ {t("why.item5")}</li>
              <li>✅ {t("why.item6")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-yellow-400 p-10">
            <h2 className="mb-5 text-3xl font-bold">
              {t("vision.title")}
            </h2>

            <p className="leading-8">
              {t("vision.desc")}
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-10 text-white">
            <h2 className="mb-5 text-3xl font-bold">
              {t("mission.title")}
            </h2>

            <ul className="space-y-4">
              <li>• {t("mission.item1")}</li>
              <li>• {t("mission.item2")}</li>
              <li>• {t("mission.item3")}</li>
              <li>• {t("mission.item4")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-5xl font-bold">
            {t("cta.title")}
          </h2>

          <p className="mt-6 text-gray-300">
            {t("cta.desc")}
          </p>

          <a
            href="https://wa.me/6281255558283"
            target="_blank"
            className="mt-10 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
          >
            {t("cta.button")}
          </a>
        </div>
      </section>
    </main>
  );
}