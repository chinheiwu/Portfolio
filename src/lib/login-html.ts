import "server-only";

// Rendered directly by src/proxy.ts, before any Next.js page/layout runs —
// so it can't use Tailwind classes or globals.css. Styles are inlined here
// to visually match the rest of the site (dark bg, blue accent, grid motif).
export function renderLoginHtml({ error }: { error?: string }) {
  const errorMessage =
    error === "config"
      ? "Sign-in isn&apos;t configured yet. The site owner needs to set SITE_PASSWORD and AUTH_SECRET."
      : error === "wrong"
        ? "Incorrect password. Please try again."
        : null;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Enter password — Chin Hei Wu</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a0a0b;
    background-image:
      linear-gradient(to right, #2a2b2f 1px, transparent 1px),
      linear-gradient(to bottom, #2a2b2f 1px, transparent 1px);
    background-size: 40px 40px;
    font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
    color: #f4f4f5;
    padding: 24px;
  }
  .card {
    width: 100%;
    max-width: 384px;
    border-radius: 16px;
    border: 1px solid #2a2b2f;
    background-color: #17181b;
    padding: 32px;
    text-align: center;
  }
  .eyebrow {
    margin: 0;
    font-family: ui-monospace, SFMono-Regular, monospace;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #60a5fa;
  }
  h1 {
    margin: 12px 0 0;
    font-size: 24px;
    font-weight: 600;
  }
  .subtitle {
    margin: 8px 0 0;
    font-size: 14px;
    color: rgba(244, 244, 245, 0.6);
  }
  .error {
    margin: 16px 0 0;
    border-radius: 8px;
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    font-size: 14px;
    padding: 10px 12px;
  }
  form { margin-top: 24px; }
  .field { position: relative; }
  input[type="password"], input[type="text"] {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #2a2b2f;
    background-color: #0a0a0b;
    color: #f4f4f5;
    font-size: 14px;
    padding: 12px 64px 12px 16px;
    outline: none;
  }
  input:focus { border-color: #60a5fa; }
  .toggle {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background: none;
    border: none;
    color: rgba(244, 244, 245, 0.6);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }
  .toggle:hover { color: #f4f4f5; }
  button[type="submit"] {
    margin-top: 12px;
    width: 100%;
    border-radius: 999px;
    border: none;
    background-color: #60a5fa;
    color: #101114;
    font-size: 14px;
    font-weight: 600;
    padding: 12px 24px;
    cursor: pointer;
  }
  button[type="submit"]:hover { opacity: 0.9; }
</style>
</head>
<body>
  <div class="card">
    <p class="eyebrow">Private Portfolio</p>
    <h1>Enter password</h1>
    <p class="subtitle">This site is password protected. Enter the password to continue.</p>
    ${errorMessage ? `<p class="error">${errorMessage}</p>` : ""}
    <form method="POST" action="/">
      <div class="field">
        <input id="password" type="password" name="password" required autofocus placeholder="Password" />
        <button type="button" class="toggle" onclick="
          var input = document.getElementById('password');
          input.type = input.type === 'password' ? 'text' : 'password';
          this.textContent = input.type === 'password' ? 'Show' : 'Hide';
        ">Show</button>
      </div>
      <button type="submit">Enter</button>
    </form>
  </div>
</body>
</html>`;
}
