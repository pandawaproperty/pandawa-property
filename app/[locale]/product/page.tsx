import { getTranslations } from "next-intl/server";
import PropertyListing from "@/components/PropertyListing";

export default async function ProductPage() {
  const t = await getTranslations("product");

  return (
    <main className="bg-gray-50">
      <section className="bg-zinc-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {t("subtitle")}
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {t("title")}
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            {t("search")}
          </p>
        </div>
      </section>

      <PropertyListing />
    </main>
  );
}