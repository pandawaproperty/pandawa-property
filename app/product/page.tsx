import ProductHero from "@/components/product/ProductHero";
import ProductStats from "@/components/product/ProductStats";
import ProductClient from "@/components/product/ProductClient";

import { developers } from "@/data/developers";
import { industrialAreas } from "@/data/industrialAreas";


export default function ProductPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <ProductHero />

      <ProductStats />

      <ProductClient
  developers={developers}
  industrialAreas={industrialAreas}
/>
    </main>
  );
}