import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

export default function Reservations() {
  const handleReservation = () => {
    // This would integrate with OpenTable, Calendly, or similar
    window.open('https://calendly.com', '_blank');
  };

  return (
    <section id="reservations" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <img
              src={restaurantInterior}
              alt="Restaurant interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Right side - Reservation form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
                Reserve Your Table
              </h2>
              <p className="text-xl text-muted-foreground">
                Book your dining experience 24/7. Perfect for date nights, celebrations, 
                or casual dining with friends and family.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-6 space-y-2 bg-background border-border">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-foreground">Easy Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Book online anytime
                </p>
              </Card>

              <Card className="p-6 space-y-2 bg-background border-border">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-foreground">Flexible Times</h3>
                <p className="text-sm text-muted-foreground">
                  Lunch & dinner slots
                </p>
              </Card>

              <Card className="p-6 space-y-2 bg-background border-border">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-foreground">All Group Sizes</h3>
                <p className="text-sm text-muted-foreground">
                  From 2 to 20+ guests
                </p>
              </Card>
            </div>

            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleReservation}
                className="w-full sm:w-auto"
              >
                Book a Table Now
              </Button>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Lunch:</span> 12:00 - 15:00
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Dinner:</span> 17:00 - 22:00
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Open:</span> Every Day
                </p>
              </div>

              <p className="text-sm text-muted-foreground pt-4">
                For large groups (10+), please call us directly at{" "}
                <a href="tel:07344104456" className="text-primary hover:underline font-semibold">
                  07344 104456
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}