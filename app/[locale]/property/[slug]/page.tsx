import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { properties } from "@/data/properties";
import { industrialAreas } from "@/data/industrialAreas";

import PropertyGallery from "@/components/PropertyGallery";
import PropertyMap from "@/components/PropertyMap";
import RelatedProperties from "@/components/RelatedProperties";

type Locale = "id" | "en" | "zh";

type Props = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export default async function PropertyDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  const t = await getTranslations({
    locale,
    namespace: "propertyDetail",
  });

  const property = properties.find((item) => item.slug === slug);

  if (!property) notFound();

  const area = industrialAreas.find(
    (item) => item.slug === property.areaSlug
  );

  return (
    <main className="bg-gray-50 pt-24">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Gallery */}
          <PropertyGallery
            images={property.images}
            title={property.title[locale]}
          />

          {/* Detail */}
          <div>
            <p className="mb-3 text-gray-500">
              📍 {property.location}
            </p>

            <h1 className="text-5xl font-bold">
              {property.title[locale]}
            </h1>

            <div className="mt-6 text-5xl font-extrabold text-yellow-500">
              {property.price}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-gray-500">{t("category")}</p>
                <h3 className="font-bold">
                  {property.category[locale]}
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-gray-500">{t("status")}</p>
                <h3 className="font-bold">
                  {property.status[locale]}
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-gray-500">{t("landArea")}</p>
                <h3 className="font-bold">
                  {property.landArea}
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-gray-500">{t("buildingArea")}</p>
                <h3 className="font-bold">
                  {property.buildingArea}
                </h3>
              </div>

            </div>

            {area && (
              <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-5">
                <p className="text-sm text-gray-500">
                  {t("locatedIn")}
                </p>

                <h3 className="mt-2 text-xl font-bold text-yellow-700">
                  {typeof area.name === "string"
                    ? area.name
                    : area.name[locale]}
                </h3>
              </div>
            )}

            <div className="mt-10">
              <h2 className="mb-4 text-3xl font-bold">
                {t("description")}
              </h2>

              <p className="whitespace-pre-line leading-8 text-gray-700">
                {property.description[locale]}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="mb-4 text-3xl font-bold">
                {t("facilities")}
              </h2>

              <ul className="space-y-2">
                {property.facilities[locale].map((item, index) => (
                  <li key={index}>✅ {item}</li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/6281255558283?text=Halo Pandawa Property, saya tertarik dengan ${property.title[locale]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              {t("whatsapp")}
            </a>

          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <PropertyMap
            latitude={property.latitude}
            longitude={property.longitude}
          />
        </div>

        {/* Related */}
        <div className="mt-16">
          <RelatedProperties
            currentSlug={property.slug}
            areaSlug={property.areaSlug}
          />
        </div>

      </div>
    </main>
  );
}