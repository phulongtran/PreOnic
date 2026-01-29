import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Process from "./Component/Process/Process";
import Products from "./Component/Products/Products";
import Stats from "./Component/Stats/Stats";
import Footer from "./Component/Footer/Footer";
import FloatingAuth from "./Component/FloatingAuth/FloatingAuth";

// DASHBOARD
import EnterpriseDashboard from "./Component/EnterpriseDashboard/EnterpriseDashboard";
import FarmerDashboard from "./Component/FarmerDashboard/FarmerDashboard";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Products />
      <Stats />
      <Footer />
      <FloatingAuth />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* DOANH NGHIỆP */}
        <Route path="/enterprise" element={<EnterpriseDashboard />} />

        {/* NÔNG DÂN */}
        <Route path="/farmer" element={<FarmerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
