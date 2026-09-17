import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

import { industrialAreas } from "@/data/industrialAreas";
import { developers } from "@/data/developers";
import { properties } from "@/data/properties";

type Locale = "id" | "en" | "zh";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function AreaDetailPage({ params }: Props) {
  const locale = (await getLocale()) as Locale;
  const { slug } = await params;

  const t = await getTranslations({
    locale,
    namespace: "industrialArea",
  });

  const area = industrialAreas.find((item) => item.slug === slug);

  if (!area) notFound();

  const developer = developers.find(
    (item) => item.slug === area.developerSlug
  );

  const areaProperties = properties.filter(
    (item) => item.areaSlug === area.slug
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {t("badge")}
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {area.name[locale]}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-300">
            {area.description[locale]}
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">
              {t("location")}
            </p>
            <h3 className="mt-2 text-xl font-bold">
              {area.location[locale]}
            </h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">
              {t("developer")}
            </p>
            <h3 className="mt-2 text-xl font-bold">
              {area.developer[locale]}
            </h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">
              {t("available")}
            </p>
            <h3 className="mt-2 text-xl font-bold">
              {areaProperties.length} {t("property")}
            </h3>
          </div>
        </div>
      </section>

      {/* DETAIL */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="mb-6 text-3xl font-bold">
              {area.name[locale]}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-500">
                  {t("developer")}
                </p>
                <p className="text-lg font-semibold">
                  {area.developer[locale]}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {locale === "id"
                    ? "Luas Kawasan"
                    : locale === "en"
                    ? "Total Area"
                    : "园区面积"}
                </p>
                <p className="text-lg font-semibold">
                  {area.totalArea}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {locale === "id"
                    ? "Akses Tol"
                    : locale === "en"
                    ? "Toll Access"
                    : "高速出口"}
                </p>
                <p className="text-lg font-semibold">
                  {area.tollAccess[locale]}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {t("location")}
                </p>
                <p className="text-lg font-semibold">
                  {area.location[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY LIST */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-bold">
            {t("listing")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areaProperties.map((property) => (
              <div
                key={property.id}
                className="rounded-2xl bg-white p-6 shadow transition hover:shadow-xl"
              >
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                  {property.status[locale]}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {property.title[locale]}
                </h3>

                <p className="mt-2 text-gray-500">
                  📍 {property.location}
                </p>

                <div className="mt-4 space-y-1 text-sm text-gray-600">
                  <p>
                    {t("land")} : {property.landArea}
                  </p>
                  <p>
                    {t("building")} : {property.buildingArea}
                  </p>
                </div>

                <p className="mt-5 text-2xl font-bold text-yellow-600">
                  {property.price}
                </p>

                <Link
                  href={`/${locale}/property/${property.slug}`}
                  className="mt-6 inline-block rounded-xl bg-black px-5 py-3 font-semibold text-white hover:bg-yellow-500 hover:text-black"
                >
                  {t("detail")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}