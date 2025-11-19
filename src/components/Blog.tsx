import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

// Import your real images
import growHerbs from "@/assets/blog/growherbs.png";
import spicyFood from "@/assets/blog/spicyfood.png";
import healthyThaiDish from "@/assets/blog/healthythaidish.png";

// Homepage Featured Posts (3 only)
const blogPosts = [
  {
    title: "Does Spicy Food Help You Lose Weight? Let’s Find Out.",
    excerpt:
      "We all love a fiery Thai curry, but does heat really burn calories? Here’s what science says – and why spicy food still benefits your body in surprising ways.",
    image: spicyFood,
    date: "March 2025",
    readTime: "2 min read",
    link: "/blog/spicy-weightloss",
  },
  {
    title: "Growing Thai Herbs in the UK: A Beginner’s Guide",
    excerpt:
      "Thai basil, galangal, lemongrass... they’re amazing but annoyingly easy to kill. Here’s how to finally keep them alive in unpredictable UK weather.",
    image: growHerbs,
    date: "March 2025",
    readTime: "3 min read",
    link: "/blog/thai-herbs-uk",
  },
  {
    title: "Why Thai Food Is Healthier Than You Think",
    excerpt:
      "Fresh herbs, light broths, bold spices, balanced flavours – Thai cuisine is naturally nourishing. Here’s what makes it both delicious and good for you.",
    image: healthyThaiDish,
    date: "March 2025",
    readTime: "2 min read",
    link: "/blog/why-thai-food-is-healthy",
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
            Quick 1-minute reads about Thai flavours, culture, and everyday cooking tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift bg-card border-border group flex flex-col"
            >
              <a href={post.link} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </a>

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

                <a href={post.link}>
                  <Button variant="ghost" className="w-full justify-between group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="/blog">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
