import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import thaiIngredients from "@/assets/thai-ingredients.jpg";
import thaiStreetFood from "@/assets/thai-street-food.jpg";
import greenCurry from "@/assets/green-curry.jpg";

const blogPosts = [
  {
    title: "The Secret Ingredients Behind Authentic Thai Curry",
    excerpt: "Discover the aromatic herbs and spices that make Thai curries so distinctive. From galangal to kaffir lime leaves, learn about the ingredients that create those complex, layered flavors.",
    image: thaiIngredients,
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Street Food Culture: Bangkok's Culinary Heart",
    excerpt: "Explore the vibrant street food scene of Bangkok and how it influences our menu. From bustling night markets to family recipes passed down through generations.",
    image: thaiStreetFood,
    date: "March 8, 2024",
    readTime: "7 min read",
  },
  {
    title: "Mastering the Art of Thai Green Curry at Home",
    excerpt: "Our head chef shares tips and techniques for creating restaurant-quality green curry in your own kitchen. Learn the balance of spice, sweetness, and aromatic herbs.",
    image: greenCurry,
    date: "March 1, 2024",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
            Stories & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into Thai cuisine, culture, and cooking techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-lift bg-card border-border group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}