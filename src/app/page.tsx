import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import OtherProjects from "./components/OtherProjects";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <Background />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
    </main>
  );
}
