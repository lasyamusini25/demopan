import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <p className="text-xs tracking-[0.3em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-heading text-6xl">Page Not Found</h1>
      <Link href="/" className="mt-8 inline-block border border-accent px-6 py-3 text-xs tracking-[0.2em] uppercase">
        Back Home
      </Link>
    </section>
  );
}
