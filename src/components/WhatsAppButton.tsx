import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/447344104456', '_blank');
  };

  return (
    <Button
      variant="hero"
      size="icon"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 animate-pulse"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
}