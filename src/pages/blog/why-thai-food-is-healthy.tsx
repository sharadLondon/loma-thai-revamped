import BlogLayout from "../../components/BlogLayout";
import Image from "next/image";
import healthyImg from "../../assets/blog/healthythaidish.png";

export default function WhyThaiFoodIsHealthy() {
  return (
    <BlogLayout
      title="Why Thai Food Is One of the Healthiest Cuisines on the Planet"
      description="Fresh herbs, balanced flavours, lean proteins — here’s why Thai food naturally supports a healthier lifestyle."
      image={healthyImg}
    >
      <p>
        Thai food is naturally fresh, balanced, and nutrient-rich. Unlike heavy Western dishes, Thai meals rely on herbs,
        vegetables, lean proteins, and light cooking methods.
      </p>

      <h2>🌱 Fresh Ingredients</h2>
      <p>Thai cuisine uses basil, coriander, lemongrass, galangal, and kaffir lime — all rich in antioxidants.</p>

      <h2>🔥 Lower in Oil</h2>
      <p>Thai stir-fries use less oil, and curries rely on herbs over heavy fats.</p>

      <h2>🥦 Plenty of Vegetables</h2>
      <p>Nearly every Thai dish incorporates a generous amount of fresh veg.</p>

      <h2>🍋 Balanced Flavours</h2>
      <p>
        Thai food avoids extremes — instead aiming for balance that keeps meals satisfying without excess calories.
      </p>

      <p>If you want food that’s flavourful AND good for you, Thai cuisine is the perfect match.</p>
    </BlogLayout>
  );
}
