"use client";

import { useTranslations } from "next-intl";
import { clients } from "@/data/clients";

export default function ClientsPage() {
  const t = useTranslations("client");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            {t("badge")}
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-500">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {clients.map((client) => (
            <div
              key={client.id}
              className="rounded-2xl border p-8 transition duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  {client.company}
                </h3>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                  {client.year}
                </span>
              </div>

              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold">{t("project")} :</span>{" "}
                  {client.project}
                </p>

                <p>
                  <span className="font-semibold">{t("location")} :</span>{" "}
                  {client.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}