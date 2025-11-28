import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import Menu from "@/components/Menu";
import OrderOnline from "@/components/OrderOnline";
import Reservations from "@/components/Reservations";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

export default function Index() {
  return (
    <>
      <Navigation />
      <Hero />
      <SignatureDishes />
      <Menu />
      <OrderOnline />
      <Reservations />
      <Reviews />
      <Blog />
      <InstagramFeed />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  );
}
