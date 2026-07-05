import type { Metadata } from "next";
import { fetchAllowedViewers } from "@/lib/allowlist";
import RefreshButton from "@/components/RefreshButton";

export const metadata: Metadata = {
  title: "Viewers — Chin Hei Wu",
  description: "People with access to this portfolio.",
};

export default async function ViewersPage() {
  let viewers: { name: string }[] = [];
  let error: string | null = null;

  try {
    viewers = await fetchAllowedViewers();
  } catch {
    error = "Couldn't load the viewer list right now. Please try again later.";
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        Viewers
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold sm:text-4xl">People with access</h1>
        <RefreshButton />
      </div>
      <p className="mt-4 text-foreground/70">
        This list is pulled live from the master spreadsheet, so it&apos;s
        always current.
      </p>

      {error && (
        <p className="mt-8 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {error}
        </p>
      )}

      {!error && (
        <ul className="mt-10 divide-y divide-surface-border rounded-2xl border border-surface-border bg-surface">
          {viewers.map((viewer) => (
            <li key={viewer.name} className="px-5 py-4 text-sm font-medium">
              {viewer.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
