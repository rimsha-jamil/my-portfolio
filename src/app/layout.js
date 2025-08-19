import "./globals.css";
import Navbar from "../app/components/navbar";

export const metadata = {
  title: "Rimsha Jamil | Portfolio",
  description: "Personal portfolio website of Rimsha Jamil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
