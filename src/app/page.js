// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>Health Bestie Project</div>
//   );
// }
// pages/index.js
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to AI Health Bestie
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Share your thoughts, and let our AI friend guide you.
        </p>
        <a
          href="/mental-health"
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
        >
          Talk to AI Friend
        </a>
      </main>
      <Footer />
    </div>
  );
}
