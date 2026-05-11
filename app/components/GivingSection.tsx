
"use client";
import { motion } from "framer-motion";
import { Heart, CreditCard } from "lucide-react";

export default function GivingSection() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Your generous contributions allow us to continue spreading the gospel, 
            serving our community, and maintaining our ministries. Every gift makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-black/60 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2">
              <CreditCard size={20} /> Give Online
            </button>
            <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
              Learn How We Use Funds
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}