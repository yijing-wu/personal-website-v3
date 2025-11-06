import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}
