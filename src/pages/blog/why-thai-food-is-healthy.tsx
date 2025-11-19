import Image from "next/image";
import healthyDish from "@/assets/blog/healthythaidish.png";

export default function WhyThaiFoodIsHealthy() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Why Thai Food Is So Healthy: A Delicious Breakdown</h1>

      <Image
        src={healthyDish}
        alt="Healthy Thai dish"
        className="rounded-lg mb-8"
        priority
      />

      <p className="mb-4">
        Thai food is known for being vibrant, balanced, and incredibly flavourful — but it’s also one of the
        healthiest cuisines in the world. From fresh ingredients to nutrient-rich herbs, Thai dishes naturally
        support a healthier lifestyle without sacrificing taste.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🌱 Fresh Ingredients</h2>
      <p className="mb-4">
        Thai cooking relies heavily on fresh vegetables, lean proteins, and herbs. You’ll rarely find heavy creams
        or unhealthy fats. Even curries are typically made with coconut milk, which contains beneficial MCTs.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🌶️ Spices Boost Metabolism</h2>
      <p className="mb-4">
        Chillies increase metabolism, reduce cravings, and add flavour without extra calories. Many spicy Thai
        dishes can aid weight management naturally.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🍋 Herbs with Healing Properties</h2>
      <p className="mb-4">
        Lemongrass, galangal, kaffir lime, and Thai basil aren’t just flavourful — they have antibacterial,
        anti-inflammatory, and antioxidant benefits used in traditional Thai medicine.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🥗 Balanced Flavours, Balanced Eating</h2>
      <p className="mb-4">
        Thai cuisine focuses on balance — sweet, sour, salty, spicy, and umami. This encourages mindful eating,
        smaller portions, and satisfaction without excess.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Healthier Choices to Order</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Tom Yum soup</li>
        <li>Green papaya salad</li>
        <li>Stir-fried vegetables with chicken</li>
        <li>Thai basil dishes</li>
      </ul>

      <p>
        Thai food proves that healthy eating doesn’t have to be boring. It can be colourful, bold, and deeply
        nourishing — all in one delicious bowl.
      </p>
    </div>
  );
}
