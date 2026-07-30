import Link from "next/link";

interface Props {
  name: string;
}

export default function AreaBreadcrumb({
  name,
}: Props) {
  return (
    <nav className="mx-auto max-w-7xl px-6 pt-6 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link
            href="/kawasan-industri"
            className="hover:text-blue-600"
          >
            Kawasan Industri
          </Link>
        </li>

        <li>/</li>

        <li className="font-medium text-gray-900">
          {name}
        </li>
      </ol>
    </nav>
  );
}