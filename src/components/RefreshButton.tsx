"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function RefreshButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [justRefreshed, setJustRefreshed] = useState(false);

  function handleClick() {
    startTransition(() => {
      router.refresh();
    });
    setJustRefreshed(true);
    setTimeout(() => setJustRefreshed(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface disabled:opacity-50"
    >
      <span className={isPending ? "animate-spin" : ""}>⟳</span>
      {isPending ? "Refreshing…" : justRefreshed ? "Refreshed" : "Refresh"}
    </button>
  );
}
