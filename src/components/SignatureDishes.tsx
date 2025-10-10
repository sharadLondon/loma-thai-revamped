import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import greenCurry from "@/assets/green-curry.jpg";
import tomYum from "@/assets/tom-yum.jpg";
import mangoStickyRice from "@/assets/mango-sticky-rice.jpg";
import roastedDuckCurry from "@/assets/roasted-duck-curry.jpg";
import octopusSalad from "@/assets/octopus-salad.jpg";
import musselsPot from "@/assets/mussels-pot.jpg";

const menuItems = [
  {
    name: "Green Curry",
    description: "Authentic Thai green curry with chicken, coconut milk, Thai basil, and bamboo shoots",
    image: greenCurry,
    category: "Curry",
  },
  {
    name: "Tom Yum Goong",
    description: "Spicy and sour Thai soup with prawns, lemongrass, galangal, and kaffir lime leaves",
    image: tomYum,
    category: "Soup",
  },
  {
    name: "Roasted Duck Curry",
    description: "Tender roasted duck in rich red curry sauce with pineapple and cherry tomatoes",
    image: roastedDuckCurry,
    category: "Signature",
  },
  {
    name: "Octopus Salad",
    description: "Fresh octopus with Thai herbs, lime, chili, and crispy shallots",
    image: octopusSalad,
    category: "Salad",
  },
  {
    name: "Mussels in the Pot",
    description: "Fresh mussels steamed with Thai herbs, basil, and aromatic broth",
    image: musselsPot,
    category: "Seafood",
  },
  {
    name: "Mango Sticky Rice",
    description: "Sweet coconut sticky rice with fresh ripe mango and coconut cream",
    image: mangoStickyRice,
    category: "Dessert",
  },
];

export default function Menu() {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From Bangkok to Askew Rd. Thai classics infused with a world of flavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card 
              key={item.name}
              className="overflow-hidden hover-lift bg-card border-border group"
            >
              {item.image && (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
              )}
              {!item.image && (
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
              )}
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Explore our complete menu featuring curries, noodles, stir-fries, soups, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://deliveroo.co.uk/menu/london/shepherds-bush/loma-thai', '_blank')}
            >
              Order Full Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = 'tel:07344104456'}
            >
              Call to Order
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}