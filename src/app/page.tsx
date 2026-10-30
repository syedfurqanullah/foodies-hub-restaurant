
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

export default function Home() {
  return (
    <main>
      <section className="section-padding">
        <Container>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Welcome to Foodies Hub
            </span>

            <h1 className="section-heading text-4xl text-brand-primary sm:text-5xl lg:text-6xl">
              Good Food.
              <span className="block text-brand-accent">
                Great Moments.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Discover delicious food, freshly prepared meals, and
              memorable dining experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">
                Order Now
              </Button>

              <Button variant="outline" size="lg">
                Explore Menu
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
