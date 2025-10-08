import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "Absolutely outstanding! The Pad Thai was the best I've had in London. The flavors are authentic and the presentation is beautiful. Will definitely be returning!",
    date: "2 weeks ago",
  },
  {
    name: "James Chen",
    rating: 5,
    text: "The green curry is to die for! Perfect balance of spice and creaminess. Service was excellent and the atmosphere is lovely. Highly recommend for a date night.",
    date: "1 month ago",
  },
  {
    name: "Emma Thompson",
    rating: 5,
    text: "Found my new favorite Thai restaurant! The Tom Yum soup had incredible depth of flavor. Fresh ingredients, generous portions, and very reasonable prices.",
    date: "3 weeks ago",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-xl text-muted-foreground">4.9 out of 5</span>
          </div>
          <p className="text-muted-foreground">Based on 200+ Google reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="p-8 space-y-4 bg-card border-border hover-lift relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">
                "{review.text}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews Embed Placeholder */}
        <Card className="p-8 bg-card border-border text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            See All Our Reviews
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read more reviews from our happy guests on Google. We're proud of our 
            consistently excellent ratings and welcome your feedback!
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://g.page/r/your-business-id/review', '_blank')}
          >
            Read More on Google
          </Button>
        </Card>

        {/* Review Generation CTA */}
        <div className="mt-16 text-center space-y-6 bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-2xl border border-border">
          <h3 className="text-3xl font-bold text-foreground">
            Enjoyed Your Experience?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scan the QR code on your table to leave us a review, or click below 
            to share your feedback online. Your reviews help us improve!
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://g.page/r/your-business-id/review', '_blank')}
          >
            Leave a Review
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";