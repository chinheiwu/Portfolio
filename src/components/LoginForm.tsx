"use client";

import { useState } from "react";

export default function LoginForm({ next }: { next: string }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="/api/site-login" method="POST" className="mt-6 space-y-3">
      <input type="hidden" name="next" value={next} />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          autoFocus
          placeholder="Password"
          className="w-full rounded-lg border border-surface-border bg-background px-4 py-3 pr-16 text-sm outline-none focus:border-accent"
        />
        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          className="absolute inset-y-0 right-0 flex items-center px-4 text-xs font-medium text-foreground/60 hover:text-foreground"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        Enter
      </button>
    </form>
  );
}
