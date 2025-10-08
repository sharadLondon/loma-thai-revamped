import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UtensilsCrossed, Clock, Bike } from "lucide-react";

export default function OrderOnline() {
  const deliveryLinks = {
    deliveroo: 'https://deliveroo.co.uk/menu/london/shepherds-bush/loma-thai',
    ubereats: 'https://www.ubereats.com/gb/store/loma-thai',
    justeat: 'https://www.just-eat.co.uk/restaurants-loma-thai-w12'
  };

  return (
    <section id="order" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
            Order Online
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enjoy authentic Thai cuisine from the comfort of your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center space-y-4 bg-card border-border hover-lift">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Fresh Ingredients</h3>
            <p className="text-muted-foreground">
              Every dish prepared with the finest, freshest ingredients
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card border-border hover-lift">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Quick Preparation</h3>
            <p className="text-muted-foreground">
              Fast service without compromising on quality
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card border-border hover-lift">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Bike className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Delivery & Pickup</h3>
            <p className="text-muted-foreground">
              Available for both delivery and convenient pickup
            </p>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open(deliveryLinks.deliveroo, '_blank')}
            className="w-full sm:w-auto"
          >
            Order on Deliveroo
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open(deliveryLinks.ubereats, '_blank')}
            className="w-full sm:w-auto"
          >
            Order on Uber Eats
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open(deliveryLinks.justeat, '_blank')}
            className="w-full sm:w-auto"
          >
            Order on Just Eat
          </Button>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Prefer to order directly? Call us at{" "}
          <a href="tel:07344104456" className="text-primary hover:underline font-semibold">
            07344 104456
          </a>
        </p>
      </div>
    </section>
  );
}