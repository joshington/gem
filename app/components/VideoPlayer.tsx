
"use client";
import { motion } from "framer-motion";

export default function VideoPlayer() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Live Service</h2>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
        >
          {/* Replace the src with your actual YouTube Live link */}
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Live Stream"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}