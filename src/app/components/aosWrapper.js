"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosWrapper({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return <>{children}</>;
}
