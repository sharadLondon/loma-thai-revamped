import BlogLayout from "../../components/BlogLayout";
import Image from "next/image";
import noodlesImg from "../../assets/blog/noodlesthai.png";

export default function ThaiNoodleGuide() {
  return (
    <BlogLayout
      title="Guide to Thai Noodles: Choosing the Right One"
      description="Rice noodles, egg noodles, glass noodles — here’s how to understand the key types and when to use them."
      image={noodlesImg}
    >
      <p>
        Thai cuisine uses a surprisingly wide range of noodles — each with its own texture, flavour, and perfect dish.
      </p>

      <h2>🍜 Rice Noodles</h2>
      <p>
        Used in Pad Thai, Pad See Ew, and Drunken Noodles. Soft, chewy, and absorbs flavour beautifully.
      </p>

      <h2>🥚 Egg Noodles</h2>
      <p>
        Bright yellow, slightly springy, and perfect for soups or dry egg noodle dishes.
      </p>

      <h2>✨ Glass Noodles</h2>
      <p>
        Made from mung bean. Silky and perfect for salads like Yum Woon Sen.
      </p>

      <h2>🍲 Wide Rice Sheets</h2>
      <p>
        Thick, wide, and great for wok stir-fries with smoky flavour.
      </p>

      <p>
        Choosing the right noodle helps you recreate restaurant-level dishes at home — effortlessly.
      </p>
    </BlogLayout>
  );
}
