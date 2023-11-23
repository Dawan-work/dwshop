import { Toaster, toast } from "sonner";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Contact } from "./views/Contact";
import { Products } from "./views/Products";
import { NotFound } from "./views/NotFound";
import { Home } from "./views/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      {/* NavBar */}
      <Navbar />
      {/* Content Page (dynamic) */}
      <main className="min-h-screen">
          <Routes>
            {/* Déclaration de chaques "routes" associé à son component */}
            {/* element = composant / path = href */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}