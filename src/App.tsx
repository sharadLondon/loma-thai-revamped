import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/index";

import SpicyWeightloss from "@/pages/blog/spicy-weightloss";
import ThaiHerbsUk from "@/pages/blog/thai-herbs-uk";
import ThaiNoodles from "@/pages/blog/thai-noodles";
import ThaiIngredients from "@/pages/blog/thai-ingredients";
import ThaiSpices from "@/pages/blog/thai-spices";
import ThaiCookingGuide from "@/pages/blog/thai-cooking-guide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Blog Pages */}
        <Route path="/blog/spicy-weightloss" element={<SpicyWeightloss />} />
        <Route path="/blog/thai-herbs-uk" element={<ThaiHerbsUk />} />
        <Route path="/blog/thai-noodles" element={<ThaiNoodles />} />
        <Route path="/blog/thai-ingredients" element={<ThaiIngredients />} />
        <Route path="/blog/thai-spices" element={<ThaiSpices />} />
        <Route path="/blog/thai-cooking-guide" element={<ThaiCookingGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
