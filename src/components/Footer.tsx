const socials = [
  // TODO: replace with your real profile URLs
  { label: "LinkedIn", href: "https://linkedin.com/in/chinheiwu" },
  { label: "GitHub", href: "https://github.com/chinheiwu" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-foreground/60 sm:flex-row">
        <p>© {new Date().getFullYear()} Chin Hei Wu. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
