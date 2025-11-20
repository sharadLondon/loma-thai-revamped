import BlogLayout from "../../components/BlogLayout";
import spicyImg from "../../assets/blog/spicyfood.png";

export default function SpicyWeightLoss() {
  return (
    <BlogLayout
      title="Is Spicy Food a Weight-Loss Hack… or Just a Hot Lie?"
      description="The truth about spicy food, metabolism, cravings, and what actually happens when you turn up the heat."
      image={spicyImg}
    >
      <h2>🔥 The Myth: “Spicy food burns fat.”</h2>
      <p>
        Technically… yes and no. Capsaicin (the heat in chillies) increases your
        metabolism slightly. You burn a few extra calories while your body
        panics, but not enough to drop a dress size. If spicy food alone worked,
        Thailand would have 0% body fat.
      </p>

      <h2>🔥 So what DOES spicy food help with?</h2>
      <ul>
        <li>You naturally eat slower — your mouth is too busy surviving.</li>
        <li>You usually eat less — spice = satisfaction.</li>
        <li>It reduces cravings — your brain says “We’re good. No dessert.”</li>
        <li>It boosts endorphins — your happy chemicals kick in.</li>
      </ul>

      <h2>🔥 The Bottom Line</h2>
      <p>
        Spicy food won’t magically make you thin, but it helps you eat more
        mindfully, feel good, and enjoy bold flavours. If you want full flavour
        minus the diet myths, Loma Thai has you covered.
      </p>
    </BlogLayout>
  );
}
