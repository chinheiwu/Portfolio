import LoginForm from "@/components/LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-grid px-6">
      <div className="w-full max-w-sm rounded-2xl border border-surface-border bg-surface p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Private Portfolio
        </p>
        <h1 className="mt-3 text-2xl font-semibold">Enter password</h1>
        <p className="mt-2 text-sm text-foreground/60">
          This site is password protected. Enter the password to continue.
        </p>

        {error === "config" && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-500">
            Sign-in isn&apos;t configured yet. The site owner needs to set
            SITE_PASSWORD and AUTH_SECRET.
          </p>
        )}
        {error === "wrong" && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-500">
            Incorrect password. Please try again.
          </p>
        )}

        <LoginForm next={next || "/"} />
      </div>
    </section>
  );
}
