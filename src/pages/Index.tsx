import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
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
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="signature">
        <SignatureDishes />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="order">
        <OrderOnline />
      </div>
      <div id="reservations">
        <Reservations />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="instagram">
        <InstagramFeed />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;