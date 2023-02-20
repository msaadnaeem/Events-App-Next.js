import React from "react";
import Navigation from "../Navbar";
import Footer from "../Footer";
import { LayoutProps } from "../types";
export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
