import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/index";

// BLOG PAGES
import WhyThaiFoodIsHealthy from "@/pages/blog/why-thai-food-is-healthy";
import SpicyWeightLoss from "@/pages/blog/spicy-weightloss";
import ThaiNoodleGuide from "@/pages/blog/thai-noodle-guide";
import ThaiHerbsUK from "@/pages/blog/thai-herbs-uk";
import ThaiIngredientsTwoInOne from "@/pages/blog/thai-ingredients-two-in-one";
import ThaiSpiceLevelsGuide from "@/pages/blog/thai-spice-levels-guide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/blog/why-thai-food-is-healthy" element={<WhyThaiFoodIsHealthy />} />
        <Route path="/blog/spicy-weightloss" element={<SpicyWeightLoss />} />
        <Route path="/blog/thai-noodle-guide" element={<ThaiNoodleGuide />} />
        <Route path="/blog/thai-herbs-uk" element={<ThaiHerbsUK />} />
        <Route path="/blog/thai-ingredients-two-in-one" element={<ThaiIngredientsTwoInOne />} />
        <Route path="/blog/thai-spice-levels-guide" element={<ThaiSpiceLevelsGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
