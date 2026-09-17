import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";

import { developers } from "@/data/developers";
import { industrialAreas } from "@/data/industrialAreas";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

type Locale = "id" | "en" | "zh";

const areaText = {
  jababeka: {
    id: {
      name: "Jababeka",
      location: "Cikarang, Bekasi",
      developer: "PT Jababeka Tbk",
      desc: "Kawasan industri terbesar di Cikarang dengan berbagai perusahaan nasional dan multinasional.",
      toll: "Tol Cikarang Barat",
    },
    en: {
      name: "Jababeka",
      location: "Cikarang, Bekasi",
      developer: "PT Jababeka Tbk",
      desc: "The largest industrial estate in Cikarang with numerous national and multinational companies.",
      toll: "West Cikarang Toll",
    },
    zh: {
      name: "Jababeka 工业园",
      location: "芝卡朗 · 勿加泗",
      developer: "Jababeka 股份有限公司",
      desc: "芝卡朗最大的工业园区，聚集众多本地及跨国企业。",
      toll: "芝卡朗西收费站",
    },
  },

  "delta-silicon": {
    id: {
      name: "Delta Silicon",
      location: "Lippo Cikarang",
      developer: "Lippo Cikarang",
      desc: "Kawasan industri modern dengan akses strategis dan fasilitas lengkap.",
      toll: "Tol Cibatu",
    },
    en: {
      name: "Delta Silicon",
      location: "Lippo Cikarang",
      developer: "Lippo Cikarang",
      desc: "Modern industrial estate with strategic access and complete facilities.",
      toll: "Cibatu Toll",
    },
    zh: {
      name: "Delta Silicon 工业园",
      location: "力宝芝卡朗",
      developer: "Lippo Cikarang",
      desc: "现代化工业园区，交通便利，配套设施完善。",
      toll: "Cibatu 收费站",
    },
  },

  "artha-graha": {
    id: {
      name: "Artha Industrial Hill",
      location: "Karawang",
      developer: "Artha Graha Group",
      desc: "Kawasan industri baru dengan infrastruktur modern dan lokasi strategis.",
      toll: "Tol Karawang Timur",
    },
    en: {
      name: "Artha Industrial Hill",
      location: "Karawang",
      developer: "Artha Graha Group",
      desc: "New industrial estate with modern infrastructure and strategic location.",
      toll: "East Karawang Toll",
    },
    zh: {
      name: "Artha Industrial Hill",
      location: "卡拉旺",
      developer: "Artha Graha 集团",
      desc: "新一代工业园区，拥有现代基础设施与优越地理位置。",
      toll: "卡拉旺东收费站",
    },
  },
};

export default async function PartnerDetailPage({ params }: Props) {
  const locale = (await getLocale()) as Locale;
  const { slug } = await params;

  const t = await getTranslations("industrialArea");

  const developer = developers.find((d) => d.slug === slug);

  if (!developer) notFound();

  const areas = industrialAreas.filter((a) => a.developerSlug === slug);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-6">
            <div className="relative h-24 w-40 rounded-xl bg-white">
              <Image
                src={developer.logo}
                alt={developer.name}
                fill
                className="object-contain p-3"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold">{developer.name}</h1>
              <p className="mt-2 text-gray-300">
                {developer.description[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-bold">
            {t("listing")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => {
              const text =
                areaText[area.slug as keyof typeof areaText]?.[locale];

              return (
                <div
                  key={area.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  <div className="relative h-52">
                    <Image
                      src={area.image}
                      alt={text?.name ?? area.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {text?.name ?? area.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      📍 {text?.location ?? area.location}
                    </p>

                    <p className="mt-4 text-gray-600">
                      {text?.desc ?? area.description}
                    </p>

                    <div className="mt-5 space-y-2 text-sm">
                      <p>
                        <strong>{t("developer")}:</strong>{" "}
                        {text?.developer ?? area.developer}
                      </p>

                      <p>
                        <strong>{t("land")}:</strong> {area.totalArea}
                      </p>

                      <p>
                        <strong>Access:</strong>{" "}
                        {text?.toll ?? area.tollAccess}
                      </p>
                    </div>

                    <Link
                      href={`/${locale}/kawasan-industri/${area.slug}`}
                      className="mt-6 inline-block rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-500"
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