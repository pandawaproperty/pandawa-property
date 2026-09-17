"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative flex min-h-screen items-center pt-20">
      {/* Background */}
      <Image
        src="/images/industri.jpg"
        alt="Warehouse"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Badge */}
          <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400 md:text-base md:tracking-[6px]">
            {t("badge")}
          </p>

          {/* Title */}
          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-xl text-gray-200 md:text-2xl">
            {t("subtitle")}
          </p>

          {/* Description */}
          <p className="mt-7 text-base leading-8 text-gray-300 md:text-lg">
            {t("description")}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${locale}/product`}
              className="rounded-xl bg-yellow-500 px-8 py-4 text-center font-semibold text-black transition hover:bg-yellow-400"
            >
              {t("buttonProperty")}
            </Link>

            <Link
              href={`/${locale}/kontak`}
              className="rounded-xl border border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-black"
            >
              {t("buttonContact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}