import { Toaster, toast } from "sonner";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <>
      <Toaster />
      {/* NavBar */}
      <Navbar />
      {/* Content Page (dynamic) */}
      <main className="container mx-auto px-4 min-h-screen">main</main>
      {/* Footer */}
      <Footer />
    </>
  );
}
