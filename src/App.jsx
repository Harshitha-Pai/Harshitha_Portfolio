import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Simple scroll-reveal
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div className="site">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
