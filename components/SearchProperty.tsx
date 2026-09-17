"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function SearchProperty() {
  const router = useRouter();
  const t = useTranslations("search");

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [area, setArea] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (keyword) params.set("keyword", keyword);
    if (category) params.set("category", category);
    if (status) params.set("status", status);
    if (area) params.set("area", area);

    router.push(`/property?${params.toString()}`);
  };

  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-7xl rounded-3xl bg-white p-8 shadow-xl">
      <div className="grid gap-5 lg:grid-cols-5">

        <input
          type="text"
          placeholder={t("placeholder")}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="rounded-xl border px-4 py-3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border px-4 py-3"
        >
          <option value="">{t("allCategory")}</option>
          <option value="Warehouse">{t("warehouse")}</option>
          <option value="Factory">{t("factory")}</option>
          <option value="Industrial Land">{t("land")}</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border px-4 py-3"
        >
          <option value="">{t("allStatus")}</option>
          <option value="Dijual">{t("sale")}</option>
          <option value="Disewa">{t("rent")}</option>
        </select>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="rounded-xl border px-4 py-3"
        >
          <option value="">{t("allArea")}</option>
          <option value="delta-silicon">Delta Silicon</option>
          <option value="jababeka">Jababeka</option>
          <option value="artha-industrial-hill">
            Artha Industrial Hill
          </option>
        </select>

        <button
          onClick={handleSearch}
          className="rounded-xl bg-yellow-400 font-bold transition hover:bg-yellow-300"
        >
          {t("button")}
        </button>

      </div>
    </section>
  );
}