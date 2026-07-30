"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import EmptyState from "@/components/ui/EmptyState";

import DeveloperCard from "./DeveloperCard";
import ProductSearch from "./ProductSearch";

import { Developer } from "@/types/developer";
import { IndustrialArea } from "@/types/industrialArea";

interface ProductClientProps {
  developers: Developer[];
  industrialAreas: IndustrialArea[];
}

export default function ProductClient({
  developers,
  industrialAreas,
}: ProductClientProps) {
  const [keyword, setKeyword] = useState("");

  const filteredDevelopers = useMemo(() => {
    if (!keyword.trim()) return developers;

    const search = keyword.toLowerCase();

    return developers.filter((developer) => {
      const developerMatch = developer.name
        .toLowerCase()
        .includes(search);

      const areaMatch = industrialAreas.some(
        (area) =>
          area.developerSlug === developer.slug &&
          area.name.toLowerCase().includes(search)
      );

      return developerMatch || areaMatch;
    });
  }, [developers, industrialAreas, keyword]);

  return (
    <>
      <ProductSearch
        value={keyword}
        onChange={setKeyword}
      />

      <section className="py-12">
        <Container>
          {filteredDevelopers.length === 0 ? (
            <EmptyState
              title="Tidak ada hasil ditemukan"
              description="Coba gunakan kata kunci lain."
            />
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredDevelopers.map((developer) => (
                <DeveloperCard
                  key={developer.id}
                  developer={developer}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}