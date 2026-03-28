import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from '@/components/Footer';
import Main from '@/components/Main'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-2xl">
      <Nav />
      <Main />
      <Footer />
    </main>
  );
}
