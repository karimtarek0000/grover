import { Metadata } from "next/types";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import SectionOne from "./components/landing/SectionOne";
import SectionTwo from "./components/landing/SectionTwo";
import SectionThree from "./components/landing/SectionThree";
import SectionFour from "./components/landing/SectionFour";
import Footer from "./components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Landing page",
};

export default function Landing() {
  return (
    <main className="overflow-hidden">
      <div className="container">
        <Navbar />
        <Header />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </main>
  );
}
