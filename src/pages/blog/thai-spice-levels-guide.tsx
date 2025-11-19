import Image from "next/image";
import spiceGuide from "@/assets/blog/spiceguide.png";

export default function ThaiSpiceLevelsGuide() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Thai Spice Levels Guide: From Mild to Fire</h1>

      <Image
        src={spiceGuide}
        alt="Thai spice level guide"
        className="rounded-lg mb-8"
        priority
      />

      <p className="mb-4">
        Thai cuisine is famous for its bold heat — but not all dishes are created equal. Whether you're new to
        spicy food or a daring chilli addict, understanding Thai spice levels helps you choose dishes comfortably
        without ruining your meal (or your evening).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🌶️ No Spice – “Mai Phet”</h2>
      <p className="mb-4">
        Many Thai dishes can be made without chilli at all. This is ideal for kids, spice-sensitive diners, or
        anyone who wants pure flavour without heat. Dishes like Pad Thai, fried rice, and satay are naturally mild.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🌶️🌶️ Mild – “Phet Nit Noi”</h2>
      <p className="mb-4">
        A gentle warmth. Great for beginners. Think of a mild green curry or a lightly spiced papaya salad.  
        You’ll feel the heat, but it won’t linger.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🌶️🌶️🌶️ Medium – “Phet”</h2>
      <p className="mb-4">
        This is the level most Thais casually eat. Enough heat to spark a sweat but still balanced with sweetness,
        sourness, and fragrance. Spicy fried rice, panang curry, and tom yum usually sit here.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🌶️🌶️🌶️🌶️ Hot – “Phet Mak”</h2>
      <p className="mb-4">
        Serious spice-lovers territory. Dishes like spicy basil stir-fry (Pad Kra Pao) or red curry often reach
        this level. Expect numb lips and possibly questioning your life choices.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🌶️🌶️🌶️🌶️🌶️ Thai Hot – “Phet Thai Thai”</h2>
      <p className="mb-4">
        If you order this, you know what you're doing. This is authentic Thai street-food heat — fresh bird’s eye
        chillies chopped in spoonfuls. Approach with caution.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">How to Order Spice Levels in Thai</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Mai Phet — No spice</li>
        <li>Phet Nit Noi — A little spicy</li>
        <li>Phet — Medium spicy</li>
        <li>Phet Mak — Very spicy</li>
        <li>Phet Thai Thai — Thai-level spicy</li>
      </ul>

      <p className="mt-6">
        Whether you like mild warmth or chilli madness, Thai cuisine always offers the perfect balance of heat
        and flavour. Just choose your level — and enjoy the ride!
      </p>
    </div>
  );
}
