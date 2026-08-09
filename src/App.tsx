import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Browse from "./pages/Browse";
import RestaurantDetail from "./pages/RestaurantDetail";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </Layout>
  );
}
