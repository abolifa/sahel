import About from "@/components/about";
import AppPreview from "@/components/app-preview";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Notify from "@/components/notify";
import Roadmap from "@/components/Roadmap";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Roadmap />
      <Features />
      <Notify />
      <AppPreview />
      <Footer />
    </>
  );
};

export default Home;
