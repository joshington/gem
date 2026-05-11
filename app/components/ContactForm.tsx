
"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      action="https://formspree.io/f/YOUR_FORM_ID_HERE" // Replace with your Formspree ID
      method="POST"
      className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-2xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition" />
        <input type="email" name="email" placeholder="Email Address" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition" />
      </div>
      <textarea name="message" rows={4} placeholder="How can we help you?" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition mb-6"></textarea>
      
      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg hover:shadow-blue-200">
        Send Message <Send size={18} />
      </button>
    </motion.form>
  );
}