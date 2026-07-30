"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faq: readonly FAQItem[];
}

export default function AreaFAQ({ faq }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold hover:bg-gray-50"
              >
                <span>{item.question}</span>

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t px-6 py-4 text-gray-600 leading-7">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}