import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDishes from "./components/FeaturedDishes";
import Menu from "./components/Menu";
import About from "./components/About";
import Reviews from "./components/Reviews";
import VisitInfo from "./components/VisitInfo";
import HoursLocation from "./components/HoursLocation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <Menu />
      <About />
      <Reviews />
      <VisitInfo />
      <HoursLocation />
      <FAQ />
      <Footer />
    </main>
  );
}
