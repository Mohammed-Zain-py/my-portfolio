import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import CoreCompetencies from "@/components/CoreCompetencies";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <CoreCompetencies />
    </div>
  );
};

export default Home;
