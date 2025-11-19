import Image from "next/image";
import herbsImage from "@/assets/blog/growherbs.png";

export default function ThaiHerbsUK() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Growing Thai Herbs in the UK: A Simple Beginner’s Guide</h1>

      <Image
        src={herbsImage}
        alt="Growing Thai herbs"
        className="rounded-lg mb-8"
        priority
      />

      <p className="mb-4">
        Fresh Thai herbs are the heart of Thai cooking — bright, aromatic, and impossible to fully replace with
        dried versions. The good news? You can grow many of them right here in the UK, even with our unpredictable
        weather.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🍃 Thai Basil</h2>
      <p className="mb-4">
        Sweet, peppery, and essential for stir-fries and curries. Thai basil grows very well indoors near a sunny
        window. Water regularly, avoid over-watering, and harvest often to encourage growth.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🍃 Lemongrass</h2>
      <p className="mb-4">
        Surprisingly easy to grow from supermarket stalks. Simply place them in water until roots form, then plant
        in a pot. Keep warm and moist. Perfect for soups, marinades, and teas.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🍃 Kaffir Lime Leaves</h2>
      <p className="mb-4">
        A dwarf kaffir lime tree grows beautifully indoors. The leaves add unmatched fragrance to curries and soups.
        Just give it light, warmth, and occasional misting.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🍃 Coriander</h2>
      <p className="mb-4">
        Coriander bolts quickly, but if you plant small amounts regularly, you'll always have fresh leaves ready.
        Use in salads, garnishes, and dipping sauces.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Tips for Growing Thai Herbs Indoors</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Use pots with drainage holes</li>
        <li>Place herbs in bright indirect light</li>
        <li>Mist leaves weekly (especially kaffir lime)</li>
        <li>Harvest little and often</li>
      </ul>

      <p>
        With just a few pots and a sunny corner, you can enjoy fresh Thai flavours all year round — no trip to the
        Asian supermarket required.
      </p>
    </div>
  );
}
