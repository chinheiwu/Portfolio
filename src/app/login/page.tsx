import Link from "next/link";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;
  const signinHref = `/api/auth/signin${next ? `?next=${encodeURIComponent(next)}` : ""}`;

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-grid px-6">
      <div className="w-full max-w-sm rounded-2xl border border-surface-border bg-surface p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Private Portfolio
        </p>
        <h1 className="mt-3 text-2xl font-semibold">Sign in to continue</h1>
        <p className="mt-2 text-sm text-foreground/60">
          This site is only visible to invited viewers. Sign in with your
          Google account to request access.
        </p>

        {error === "config" && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-500">
            Sign-in isn&apos;t configured yet. The site owner needs to set
            GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / AUTH_SECRET.
          </p>
        )}
        {error && error !== "config" && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-500">
            Something went wrong signing you in. Please try again.
          </p>
        )}

        <Link
          href={signinHref}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Sign in with Google
        </Link>
      </div>
    </section>
  );
}
