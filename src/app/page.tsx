import { Metadata } from "next/types";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";

export const metadata: Metadata = {
  title: "Landing page",
};

export default function Landing() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <Header />
    </main>
  );
}
