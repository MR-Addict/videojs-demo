import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./pages";
import { Footer } from "@/components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
    <Footer />
  </React.StrictMode>
);
