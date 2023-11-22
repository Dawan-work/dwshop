import { Toaster, toast } from "sonner";
import Footer from "./components/Footer";
import { Menu, ShoppingBag, X } from "react-feather";

export default function App() {
  return (
    <>
      <Toaster />
      {/* NavBar */}
      <header className="shadow shadow-neutral py-5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <p>Dwshop</p>
          {/* Menu desktop */}
          <nav>
            <ul className="flex gap-10">
              <li>
                <a
                  className="text-lg hover:text-secondary font-semibold"
                  href="#"
                >
                  Nos Produits
                </a>
              </li>

              <li>
                <a
                  className="text-lg hover:text-secondary font-semibold"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-lg hover:text-secondary font-semibold"
                  href="#"
                >
                  Se Connecter
                </a>
              </li>
              <li>
                <a
                  className="text-lg hover:text-secondary font-semibold"
                  href="#"
                >
                  S'inscrire
                </a>
              </li>
            </ul>
          </nav>
          {/* Menu burger */}
          <button className="hover:bg-neutral p-2 rounded-full hover:text-secondary hover:scale-105">
            <X />
          </button>
          <button className="hover:bg-neutral p-2 rounded-full hover:text-secondary hover:scale-105">
            <Menu />
          </button>
          {/* Panier */}
          <button className="hover:bg-neutral p-2 rounded-full hover:text-secondary hover:scale-105">
            <ShoppingBag />
          </button>
          {/* Menu Mobile */}
        </div>
      </header>
      {/* Content Page (dynamic) */}
      <main className="container mx-auto px-4 min-h-screen">main</main>
      {/* Footer */}
      <Footer />
    </>
  );
}
