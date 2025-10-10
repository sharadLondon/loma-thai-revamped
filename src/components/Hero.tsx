import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-thai-food.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious Thai cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-in">
        {/* Logo/Name */}
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-gold animate-scale-in font-loma">
            LOMA
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 font-light tracking-wide">
            OPEN EVERY DAY
          </p>
        </div>

        {/* Tagline */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Timeless Thai, Reimagined
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            ต้นตำหรับไทยแท้ร่วมสมัย
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          A fusion feast for the senses. Experience the vibrant soul of Thailand with authentic 
          flavors, fresh ingredients, and a modern touch.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('order')}
            className="w-full sm:w-auto"
          >
            Order Online
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('reservations')}
            className="w-full sm:w-auto"
          >
            Reserve a Table
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-sm md:text-base">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <MapPin className="w-5 h-5" />
            <span>131 Askew Road, W12 9AU</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
            <a href="tel:07344104456" className="hover:underline">07344 104456</a>
          </div>
        </div>

        {/* Hours */}
        <p className="text-muted-foreground pt-4">
          Open Every Day: 12:00 - 15:00 | 17:00 - 22:00
        </p>
      </div>
    </section>
  );
}