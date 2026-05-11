
"use client";
import { motion } from "framer-motion";
import { Church, Users, Heart } from "lucide-react";

const stats = [
  { icon: Church, count: "20", label: "Churches Planted" },
  { icon: Users, count: "50", label: "Missional Communities" },
  { icon: Heart, count: "1000", label: "Salvations" },
];

export default function ImpactSection() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Ministry Impact</h2>
          <p className="text-blue-200">Seeing God move in our city and beyond.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10 text-center hover:bg-white/20 transition-all"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-6 text-orange-400" />
              <h3 className="text-5xl font-extrabold mb-2">{stat.count}+</h3>
              <p className="text-blue-100 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}