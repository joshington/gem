
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bg.jpeg" // Ensure this file is in your public folder
        alt="Church Community"
        fill
        priority
        className="object-cover brightness-[0.4]" // Darkens the image so text is readable
      />

      {/* Content Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Gospel Extension<br />Ministries
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10">
          We Love God and  We Love People
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl">
            Join Us This Sunday
          </button>
        </div>
      </motion.div>
    </section>
  );
}