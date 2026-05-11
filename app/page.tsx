
"use client";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Navbar from "./components/Navbar";
import WeeklyPrograms from "./components/WeeklyPrograms";
import ImpactSection from "./components/ImpactSection";
import LiveAndSermons from "./components/LiveAndSermons";
import Events from "./components/Events";
import GivingSection from "./components/GivingSection";
import MapSection from "./components/MapSection";
import ContactForm from "./components/ContactForm";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WeeklyPrograms />
      <ImpactSection />
      {/* Hero Section
      
      
      <section className="h-screen flex items-center justify-center bg-blue-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-6"
        >
          <h1 className="text-6xl font-extrabold text-blue-900 mb-6">Welcome to GEM</h1>
          <p className="text-xl text-blue-700 mb-8 max-w-lg mx-auto">Experience a community of grace, worship, and biblical teaching.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">Plan Visit</button>
            <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full hover:bg-blue-50 transition">Watch Live</button>
          </div>
        </motion.div>
      </section>

      */}

      {/* Ministries Section 
      <section id="ministries" className="section-padding max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Ministries</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="p-8 border border-slate-200 rounded-2xl hover:shadow-2xl transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Ministry Name</h3>
              <p className="text-slate-600">Short description of the ministry and its impact on the community.</p>
            </motion.div>
          ))}
        </div>
      </section>

      */}

      {/* CTA Section 
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Join us this Sunday</h2>
        <p className="mb-8">Service starts at 10:00 AM. Everyone is welcome.</p>
        <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold">Get Directions</button>
      </section>

      */}
      
     
      <LiveAndSermons />
       <Events />
      <GivingSection />
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600">Have questions? We would love to hear from you.</p>
        </div>
        <ContactForm />
      </section>
      {/* Map Section */}
      
      <Footer />
    </main>
  );
}