import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import OrderOnline from "@/components/OrderOnline";
import Reservations from "@/components/Reservations";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Menu />
      <OrderOnline />
      <Reservations />
      <Reviews />
      <InstagramFeed />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;