import Image from "next/image";
import Link from "next/link";

import Card from "@/components/ui/Card";
import CardContent from "@/components/ui/CardContent";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { Developer } from "@/types/developer";
import { industrialAreas } from "@/data/industrialAreas";

interface Props {
  developer: Developer;
}

export default function DeveloperCard({
  developer,
}: Props) {
  const totalAreas = industrialAreas.filter(
    (area) => area.developerSlug === developer.slug
  ).length;

  return (
    <Card className="overflow-hidden group">

      {/* Banner */}

      <div className="relative h-52 overflow-hidden">

        <Image
          src={developer.banner}
          alt={developer.name}
          fill
  
        className="object-contain"
        />

      </div>

      <CardContent>

        {/* Logo */}

        <div className="-mt-16 mb-5">

          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">

            <Image
              src={developer.logo}
              alt={developer.name}
              fill

              className="object-contain p-2"
            />

          </div>

        </div>

        <Badge>Developer</Badge>

        <h3 className="mt-4 text-2xl font-bold text-zinc-900">
          {developer.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-zinc-600 line-clamp-3">
          {developer.description}
        </p>

        <div className="mt-6 space-y-3 text-sm">

          <div className="flex items-center gap-2 text-zinc-600">
            📍
            <span>{developer.location}</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-600">
            🏭
            <span>{totalAreas} Kawasan Industri</span>
          </div>

        </div>

        <div className="mt-8 flex gap-3">

          <Button
            href={`/partner/${developer.slug}`}
            fullWidth
          >
            Detail
          </Button>

          {developer.website && (
            <Link
              href={developer.website}
              target="_blank"
              className="flex items-center justify-center rounded-xl border border-zinc-300 px-4 hover:bg-zinc-100"
            >
              🌐
            </Link>
          )}

        </div>

      </CardContent>

    </Card>
  );
}