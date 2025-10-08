import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gradient-gold">LOMA</h3>
            <p className="text-muted-foreground">
              Timeless Thai, Reimagined
            </p>
            <p className="text-sm text-muted-foreground">
              ต้นตำหรับไทยแท้ร่วมสมัย
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#order" className="text-muted-foreground hover:text-primary transition-colors">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-muted-foreground hover:text-primary transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">131 Askew Road, W12 9AU, London</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:07344104456" className="text-sm hover:text-primary transition-colors">
                  07344 104456
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@lomathai.com" className="text-sm hover:text-primary transition-colors">
                  info@lomathai.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Opening Hours</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Every Day</p>
              <p>12:00 - 15:00</p>
              <p>17:00 - 22:00</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://instagram.com/loma_thai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/lomathai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Loma Thai Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}