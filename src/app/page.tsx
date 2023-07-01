import { Metadata } from "next/types";
import Navbar from "./components/layout/navbar/Navbar";

export const metadata: Metadata = {
  title: "Landing page",
};

export default function Landing() {
  return (
    <main className="container mx-auto">
      <Navbar />
    </main>
  );
}
