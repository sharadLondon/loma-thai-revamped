"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, ArrowRight } from "lucide-react";

import growHerbs from "../assets/blog/growherbs.png";
import spicyFood from "../assets/blog/spicyfood.png";
import top5 from "../assets/blog/top5ingredients.png";
import spiceGuide from "../assets/blog/spiceguide.png";
import noodlesThai from "../assets/blog/noodlesthai.png";
import healthyDish from "../assets/blog/healthythaidish.png";

const blogPosts = [
  {
    title: "Does Spicy Food Burn Fat? Let’s Unpack the Truth",
    excerpt:
      "Everyone says spicy food boosts metabolism — but how much does it REALLY help? A quick, honest breakdown.",
    image: spicyFood,
    date: "March 20, 2024",
    readTime: "2 min read",
    slug: "spicy-weightloss",
  },
  {
    title: "My First Thai Herb Garden (UK Edition)",
    excerpt:
      "Thai basil, lemongrass, kaffir lime… and the VERY real struggle of keeping them alive in British weather.",
    image: growHerbs,
    date: "March 18, 2024",
    readTime: "2 min read",
    slug: "thai-herbs-uk",
  },
  {
    title: "Top 5 Thai Ingredients That Taste Good AND Do You Good",
    excerpt:
      "Flavour + health benefits in one hit. Simple, fun, and actually useful.",
    image: top5,
    date: "March 16, 2024",
    readTime: "3 min read",
    slug: "thai-ingredients-two-in-one",
  },
  {
    title: "The Thai Spice Level Guide (Made Simple)",
    excerpt:
      "From mild to ‘why did I do this?’ — UK-friendly breakdown of Thai heat levels.",
    image: spiceGuide,
    date: "March 14, 2024",
    readTime: "1 min read",
    slug: "thai-spice-levels-guide",
  },
  {
    title: "Thai Noodles 101",
    excerpt:
      "Pad Thai, Pad See Ew, Drunken Noodles — what’s the actual difference?",
    image: noodlesThai,
    date: "March 12, 2024",
    readTime: "2 min read",
    slug: "thai-noodle-guide",
  },
  {
    title: "Why Thai Food Is Secretly Healthy",
    excerpt:
      "Herbs, spices, balance, freshness — Thai food does a LOT more for the body than people realise.",
    image: healthyDish,
    date: "March 10, 2024",
    readTime: "3 min read",
    slug: "why-thai-food-is-healthy",
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
            Bite-sized articles about Thai food, culture, and flavour
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a key={index} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover-lift bg-card border-border group flex flex-col cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
