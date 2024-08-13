import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppBtn/WhatsappButton";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Link to={"/page_no_found"} className="donate-now-btn">
        {/* Aquí puedes reemplazar el emoji por un icono de alguna librería si prefieres */}
        💖 Donate Now
      </Link>
    </div>
  );
};

export default Layout;
