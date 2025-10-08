import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447344104456', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
            Visit Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're located in the heart of Shepherd's Bush, ready to serve you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 space-y-4 bg-background border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    131 Askew Road<br />
                    W12 9AU, London<br />
                    United Kingdom
                  </p>
                  <Button 
                    variant="link" 
                    className="px-0 mt-2"
                    onClick={() => window.open('https://maps.google.com/?q=131+Askew+Road+W12+9AU', '_blank')}
                  >
                    Get Directions →
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-background border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:07344104456"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    07344 104456
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-background border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:info@lomathai.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@lomathai.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-background border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">Open Every Day</p>
                    <p>Lunch: 12:00 - 15:00</p>
                    <p>Dinner: 17:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="p-8 bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    Quick Questions?
                  </h3>
                  <p className="text-muted-foreground">
                    Chat with us instantly on WhatsApp for reservations, dietary requirements, or any inquiries
                  </p>
                </div>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="flex-shrink-0"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </Card>
          </div>

          {/* Google Maps Embed */}
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7523847389747!2d-0.2344758!3d51.5127656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f8c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2s131%20Askew%20Rd%2C%20London%20W12%209AU!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Loma Thai Restaurant Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}