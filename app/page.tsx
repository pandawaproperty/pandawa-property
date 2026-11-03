import Hero from "@/components/Hero";
import SearchProperty from "@/components/SearchProperty";
import Features from "@/components/Features";
import PropertyListing from "@/components/PropertyListing";
import Statistics from "@/components/Statistics";

export const metadata = {
  title: "Warehouse, Factory & Industrial Land Indonesia",
  description:
    "Jual dan sewa warehouse, factory, serta industrial land di Cikarang, Karawang, Bekasi, Subang dan kawasan industri terbaik di Indonesia.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <SearchProperty />
      <Features />
      <PropertyListing />
      <Statistics />
     
    </>
  );
}