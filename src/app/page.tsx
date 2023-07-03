import { Metadata } from "next/types";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import SectionOne from "./components/landing/SectionOne";

export const metadata: Metadata = {
  title: "Landing page",
};

export default function Landing() {
  return (
    <main>
      {/* <div className="container">
        <Navbar />
        <Header />
      </div> */}
      <SectionOne />
    </main>
  );
}
