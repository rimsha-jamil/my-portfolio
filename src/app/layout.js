// app/layout.js
import "./globals.css";
import Navbar from "../app/components/navbar";
import AosWrapper from "./components/aosWrapper";

export const metadata = {
  title: "Rimsha Jamil | Portfolio",
  description: "Personal portfolio website of Rimsha Jamil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AosWrapper> 
          <Navbar />
          {children}
        </AosWrapper>
      </body>
    </html>
  );
}
