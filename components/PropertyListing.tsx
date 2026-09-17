"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilter from "@/components/PropertyFilter";

type Locale = "id" | "en" | "zh";

export default function PropertyListing() {
  const locale = useLocale() as Locale;

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = properties.filter((property) => {
    const title = property.title[locale].toLowerCase();
    const location = property.location.toLowerCase();
    const categoryText = property.category[locale].toLowerCase();
    const statusText = property.status[locale].toLowerCase();

    const matchKeyword =
      title.includes(keyword.toLowerCase()) ||
      location.includes(keyword.toLowerCase());

    const matchCategory =
      category === "all" || categoryText === category;

    const matchStatus =
      status === "all" || statusText === status;

    return matchKeyword && matchCategory && matchStatus;
  });

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
     

        <p className="my-6 text-gray-500">
          {filtered.length} Properti ditemukan
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}