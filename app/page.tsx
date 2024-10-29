import Image from "next/image";
import Navbar from "@/components/Navbar";
import Recipe from "@/components/Recipe";
import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
import { Roboto } from "next/font/google";
import RecipeComponent from "@/components/Recipe";
export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth" >
      <section id="navbar" className="snap-start"><Navbar/></section>
      <section id="about" className="snap-center"><Aboutus/></section>
      <section id="recipe" className="snap-center"><RecipeComponent/></section>
      <section id="contact" className="snap-center"><Contact/></section>
      

      
    </main>
  );
}
