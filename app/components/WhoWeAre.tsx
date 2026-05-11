
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-blue-900 font-bold text-sm tracking-widest uppercase mb-2">Our Foundation</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Who We Are</h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            At Gospel Extension Ministries, our DNA is built on the pursuit of biblical truth, 
            intentional community, and a heart for those who have yet to hear the Good News. 
            We believe that every person has a purpose, and our goal is to help you discover 
            that purpose through faith.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Led by <strong>Bishop Henry</strong> and <strong>Pastor Maureen Musana</strong>, we are committed to building a legacy of 
            faith that extends beyond the walls of our church and into the heart of our 
            city and the world. Join us as <strong>we love God, love people</strong>, and make disciples who make disciples.
          </p>
        </motion.div>

        {/* Right Side: Pastor's Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/p.jpg" // Place your photo in the public folder
              alt="Pastor and his wife"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}