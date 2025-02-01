import Addresses from "@/components/addresses";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Products from "@/components/products";
import Projects from "@/components/projects";
import Services from "@/components/services";
export default function Home() {
  return (
    <main className="max-md:px-3">
      <Hero />
      <Projects />
      <Services />
      <Partners />
      <Products />
      <Faq />
      <Addresses />
    </main>
  );
}
