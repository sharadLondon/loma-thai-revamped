import React from "react";

export default function SpicyFoodAndMetabolism() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 18px", fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}>
      <title>Spicy Food and Metabolism: Why Heat Can Help Your Body</title>
      <meta name="description" content="Learn how spicy food affects metabolism, appetite and wellbeing — plus safe tips for enjoying heat in Thai dishes." />

      <img
        src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1400&q=80"
        alt="Chillies and spices"
        style={{ width: "100%", borderRadius: 12, marginBottom: 28, objectFit: "cover" }}
      />

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Spicy Food and Metabolism: Why Heat Can Help Your Body</h1>

      <p style={{ lineHeight: 1.6 }}>
        Spices such as chilli are central to many Thai dishes. Beyond flavour, capsaicin — the compound that makes chillies hot — has measurable effects on metabolism and appetite.
      </p>

      <h2 style={{ marginTop: 22 }}>Capsaicin and Calorie Burn</h2>
      <p style={{ lineHeight: 1.6 }}>
        Research shows capsaicin can temporarily increase metabolic rate and energy expenditure. This effect is modest but consistent — meaning spicy meals can support slight boosts in calorie burn.
      </p>

      <h2 style={{ marginTop: 18 }}>Appetite Control</h2>
      <p style={{ lineHeight: 1.6 }}>
        Many people experience reduced appetite after spicy meals. This is partly due to the heat sensation and partly due to the hormetic (mild stress) effect that triggers satiety signals.
      </p>

      <h2 style={{ marginTop: 18 }}>Cardio & Circulation</h2>
      <p style={{ lineHeight: 1.6 }}>
        Spices can temporarily increase heart rate and circulation, offering a warming sensation. For most healthy adults, this is safe and part of the appeal of spicy cooking.
      </p>

      <h3 style={{ marginTop: 24 }}>Safety & Enjoyment Tips</h3>
      <ul style={{ lineHeight: 1.6 }}>
        <li>Start with mild spice and increase gradually.</li>
        <li>Choose coconut-based dishes to moderate heat.</li>
        <li>If you have digestive sensitivity, avoid very high-heat dishes.</li>
      </ul>

      <hr style={{ margin: "28px 0", borderColor: "#eee" }} />

      <p style={{ color: "#555", fontSize: 14 }}>
        Want to try spicy Thai without overdoing it? Ask for “medium” or “less spice” when ordering, and enjoy the flavour benefits with controlled heat.
      </p>
    </div>
  );
}
