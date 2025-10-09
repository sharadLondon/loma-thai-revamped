import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import greenCurry from "@/assets/green-curry.jpg";
import tomYum from "@/assets/tom-yum.jpg";
import mangoStickyRice from "@/assets/mango-sticky-rice.jpg";
import heroImage from "@/assets/hero-thai-food.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import thaiIngredients from "@/assets/thai-ingredients.jpg";

const instagramPosts = [
  { image: greenCurry, likes: 342, caption: "Green curry perfection 🍛" },
  { image: tomYum, likes: 289, caption: "Spicy & sour Tom Yum 🔥" },
  { image: heroImage, likes: 456, caption: "Pad Thai dreams 🍜" },
  { image: restaurantInterior, likes: 198, caption: "Cozy vibes ✨" },
  { image: thaiIngredients, likes: 234, caption: "Fresh ingredients daily 🌿" },
  { image: mangoStickyRice, likes: 387, caption: "Sweet endings 🥭" },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Instagram className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
              @Loma_Thai
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow us for daily food inspiration, behind-the-scenes moments, and special offers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden group cursor-pointer aspect-square border-border"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
                <div className="flex items-center gap-2 text-white">
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold">{post.likes} likes</span>
                </div>
                <p className="text-white text-sm text-center">
                  {post.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://instagram.com/loma_thai', '_blank')}
          >
            Follow Us on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}