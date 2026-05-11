
"use client";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">Find Us</h2>
          <p className="text-slate-600 mt-2">Join us in person this Sunday at 10:00 AM.</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        >
          {/* Replace the src with your Google Maps Embed URL */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.77360003345!2d32.55160387403776!3d0.27127756409503057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd162416cbff%3A0x94bd6ef2da3af510!2sGospel%20Extension%20Ministries!5e0!3m2!1sen!2sug!4v1778262159461!5m2!1sen!2sug" 
          width="100%" 
          height="100%" 
          style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>

        
        </motion.div>
      </div>
    </section>
  );
}