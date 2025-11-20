import BlogLayout from "../../components/BlogLayout";
import Image from "next/image";
import spiceImg from "../../assets/blog/spiceguide.png";

export default function ThaiSpiceLevelsGuide() {
  return (
    <BlogLayout
      title="Thai Spice Levels Explained: From Mild to ‘Send Help’"
      description="A simple guide to understanding real Thai spice levels — and how to order the right heat for you."
      image={spiceImg}
    >
      <p>
        Thai spice levels can be confusing — mild here isn’t mild everywhere else.  
        Here’s the real breakdown.
      </p>

      <h2>🌶 Mild</h2>
      <p>
        Just a hint of warmth. Great for beginners or kids.
      </p>

      <h2>🌶🌶 Medium</h2>
      <p>
        Balanced heat. Enough kick to feel Thai flavour without overwhelming.
      </p>

      <h2>🌶🌶🌶 Hot</h2>
      <p>
        Typical Thai spice. Expect real warmth and flavour intensity.
      </p>

      <h2>🌶🌶🌶🌶 Extra Hot</h2>
      <p>
        For people who enjoy the burn. You will sweat.
      </p>

      <h2>🌶🌶🌶🌶🌶 Thai Level</h2>
      <p>
        Not recommended unless you grew up with chillies.  
        Proceed with caution (and maybe milk).
      </p>

      <p>
        Now you can order with confidence — and avoid accidental destruction.
      </p>
    </BlogLayout>
  );
}
