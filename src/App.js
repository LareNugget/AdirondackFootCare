import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Products from "./pages/Products";
import Insurance from "./pages/Insurance";
import Services from "./pages/Services";
import { AdirondackStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <AdirondackStyles />
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/insurance" element={<Insurance />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
