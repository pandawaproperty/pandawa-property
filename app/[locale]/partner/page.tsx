"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { developers } from "@/data/developers";
import { industrialAreas } from "@/data/industrialAreas";

type Locale = "id" | "en" | "zh";

export default function PartnerPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("partner");

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-zinc-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">{t("title")}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {developers.map((developer) => {
              const areas = industrialAreas.filter(
                (item) => item.developerSlug === developer.slug
              );

              return (
                <div
                  key={developer.id}
                  className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-2xl"
                >
                  <div className="relative h-52 bg-gray-100">
                    <Image
                      src={developer.logo}
                      alt={developer.name}
                      fill
                      className="object-contain p-8"
                    />
                  </div>

                  <div className="p-8">
                    <h2 className="text-2xl font-bold">{developer.name}</h2>

                    <p className="mt-4 text-gray-600">
                      {developer.description[locale]}
                    </p>

                    <div className="mt-6">
                      <h3 className="mb-3 font-semibold">
                        {t("industrialArea")}
                      </h3>

                      <ul className="space-y-2">
                        {areas.map((area) => (
                          <li key={area.id}>
                            • {area.name[locale]}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/${locale}/partner/${developer.slug}`}
                      className="mt-8 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500"
                    >
                      {t("detail")}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}