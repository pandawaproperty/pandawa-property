"use client";

import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          {t("title")}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          {t("subtitle")}
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow transition hover:shadow-xl">
            <div className="text-5xl">🏭</div>

            <h3 className="mt-6 text-2xl font-semibold">
              {t("card1.title")}
            </h3>

            <p className="mt-4 text-gray-600">
              {t("card1.desc")}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow transition hover:shadow-xl">
            <div className="text-5xl">📍</div>

            <h3 className="mt-6 text-2xl font-semibold">
              {t("card2.title")}
            </h3>

            <p className="mt-4 text-gray-600">
              {t("card2.desc")}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow transition hover:shadow-xl">
            <div className="text-5xl">🤝</div>

            <h3 className="mt-6 text-2xl font-semibold">
              {t("card3.title")}
            </h3>

            <p className="mt-4 text-gray-600">
              {t("card3.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}