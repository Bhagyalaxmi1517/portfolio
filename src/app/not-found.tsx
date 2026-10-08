import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center justify-center py-28 text-center sm:py-36">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="muted mt-4 max-w-md">
        Sorry, the page you are looking for does not exist or may have been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to the homepage
      </Link>
    </section>
  );
}
