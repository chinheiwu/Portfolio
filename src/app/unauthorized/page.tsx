import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-grid px-6">
      <div className="w-full max-w-sm rounded-2xl border border-surface-border bg-surface p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Access Restricted
        </p>
        <h1 className="mt-3 text-2xl font-semibold">You&apos;re not on the list</h1>
        <p className="mt-2 text-sm text-foreground/60">
          Your Google account isn&apos;t in the list of invited viewers for
          this portfolio. Contact the site owner if you believe this is a
          mistake.
        </p>

        <Link
          href="/login"
          className="mt-6 inline-block rounded-full border border-surface-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-background"
        >
          Try a different account
        </Link>
      </div>
    </section>
  );
}
