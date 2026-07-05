import FadeIn from "./FadeIn";

export default function Products() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
            Products
          </h2>
          <p className="mt-2 text-2xl font-semibold sm:text-3xl">
            Products coming soon
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
