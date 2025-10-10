import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuCategories = {
  starters: [
    { name: "Spring Rolls (4 pcs)", description: "Crispy vegetable rolls with sweet chili sauce", price: "£6.50" },
    { name: "Chicken Satay (5 pcs)", description: "Grilled chicken skewers with peanut sauce", price: "£7.95" },
    { name: "Tom Yum Soup", description: "Spicy & sour soup with prawns, lemongrass & lime", price: "£8.50" },
    { name: "Prawn Crackers", description: "Crispy prawn crackers with sweet chili dip", price: "£4.50" },
    { name: "Chicken Wings (6 pcs)", description: "Thai-style marinated wings with sriracha mayo", price: "£7.50" },
    { name: "Fishcakes (4 pcs)", description: "Spicy Thai fishcakes with cucumber relish", price: "£7.95" },
  ],
  curries: [
    { name: "Green Curry", description: "Coconut curry with Thai basil, bamboo shoots & choice of protein", price: "£12.95" },
    { name: "Red Curry", description: "Rich red curry with peppers, pineapple & choice of protein", price: "£12.95" },
    { name: "Massaman Curry", description: "Mild curry with peanuts, potatoes & choice of protein", price: "£13.50" },
    { name: "Panang Curry", description: "Thick & creamy curry with kaffir lime leaves", price: "£12.95" },
    { name: "Roasted Duck Curry", description: "Tender roasted duck in red curry with pineapple", price: "£16.95" },
  ],
  stirFry: [
    { name: "Pad Thai", description: "Classic stir-fried rice noodles with tamarind sauce", price: "£11.95" },
    { name: "Pad See Ew", description: "Flat rice noodles with soy sauce & Chinese broccoli", price: "£11.95" },
    { name: "Drunken Noodles", description: "Spicy stir-fried noodles with Thai basil", price: "£12.50" },
    { name: "Thai Basil Stir-Fry", description: "Spicy stir-fry with Thai basil & chili", price: "£11.95" },
    { name: "Cashew Nut Stir-Fry", description: "Stir-fried with roasted cashews & vegetables", price: "£12.50" },
  ],
  rice: [
    { name: "Thai Fried Rice", description: "Egg-fried rice with vegetables & choice of protein", price: "£10.95" },
    { name: "Pineapple Fried Rice", description: "Fragrant rice with pineapple, cashews & raisins", price: "£11.95" },
    { name: "Jasmine Rice", description: "Steamed Thai jasmine rice", price: "£3.50" },
    { name: "Coconut Rice", description: "Jasmine rice cooked in coconut milk", price: "£4.50" },
    { name: "Sticky Rice", description: "Traditional Thai sticky rice", price: "£4.00" },
  ],
  seafood: [
    { name: "Grilled Sea Bass", description: "Whole sea bass with Thai herbs & tamarind sauce", price: "£18.95" },
    { name: "Mussels in the Pot", description: "Fresh mussels steamed with Thai herbs & basil", price: "£14.95" },
    { name: "Prawns with Garlic", description: "King prawns stir-fried with garlic & pepper", price: "£15.95" },
    { name: "Squid with Holy Basil", description: "Stir-fried squid with Thai holy basil", price: "£13.95" },
    { name: "Octopus Salad", description: "Fresh octopus with Thai herbs, lime & chili", price: "£12.95" },
  ],
  salads: [
    { name: "Som Tam", description: "Green papaya salad with peanuts & dried shrimp", price: "£8.95" },
    { name: "Larb Gai", description: "Minced chicken salad with Thai herbs & toasted rice", price: "£9.95" },
    { name: "Yum Woon Sen", description: "Glass noodle salad with prawns & vegetables", price: "£10.95" },
    { name: "Beef Salad", description: "Grilled beef with lime, chili & fresh herbs", price: "£11.95" },
  ],
  desserts: [
    { name: "Mango Sticky Rice", description: "Sweet coconut sticky rice with fresh mango", price: "£6.95" },
    { name: "Thai Coconut Ice Cream", description: "Homemade coconut ice cream with peanuts", price: "£5.50" },
    { name: "Banana Fritters", description: "Deep-fried banana with honey & sesame", price: "£5.95" },
    { name: "Thai Tea Panna Cotta", description: "Creamy Thai tea dessert with coconut", price: "£6.50" },
  ],
};

export default function Menu() {
  return (
    <section id="full-menu" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
            Full Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic Thai cuisine with prices
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            <TabsTrigger value="starters">Starters</TabsTrigger>
            <TabsTrigger value="curries">Curries</TabsTrigger>
            <TabsTrigger value="stirFry">Stir-Fry</TabsTrigger>
            <TabsTrigger value="rice">Rice</TabsTrigger>
            <TabsTrigger value="seafood">Seafood</TabsTrigger>
            <TabsTrigger value="salads">Salads</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
          </TabsList>

          {Object.entries(menuCategories).map(([key, items]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div className="grid gap-4">
                {items.map((item, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-xl font-bold text-primary whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-muted-foreground">
            * Protein choices: Chicken, Beef, Pork, Prawns (+£2), Tofu, or Vegetables
          </p>
          <p className="text-sm text-muted-foreground">
            ** Spice levels: Mild, Medium, Hot, or Thai Hot 🌶️
          </p>
        </div>
      </div>
    </section>
  );
}
