import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurrentWork from "@/components/CurrentWork";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Milestones from "@/components/Milestones";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Journals from "@/components/Journals";
import Blog from "@/components/Blog";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="section-divider" />
        <CurrentWork />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Milestones />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Publications />
        <div className="section-divider" />
        <Journals />
        <div className="section-divider" />
        <Blog />
        <div className="section-divider" />
        <GitHubActivity />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
