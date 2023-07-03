import { Metadata } from "next/types";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import SectionOne from "./components/landing/SectionOne";
import SectionTwo from "./components/landing/SectionTwo";

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
    </main>
  );
}
