import Navbar from "@/components/Navbar";
import { About, Expertise, Hero, Services, Works } from "../../components";
export default function Home() {
  return (
    <main className="bg-cd-bck2 ">
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Services />
      <Expertise />
    </main>
  );
}
