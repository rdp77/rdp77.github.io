import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-32">
      <p className="font-mono text-sm text-faint">404</p>
      <h1 className="h2 mt-2 text-4xl">Page not found</h1>
      <Link
        href="/"
        className="mt-6 inline-block rounded-sm bg-inverse-bg px-5 py-2.5 text-sm font-medium text-inverse-fg"
      >
        Back to dashboard
      </Link>
    </div>
  );
}
