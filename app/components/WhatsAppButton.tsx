
"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+256751584016";
  const message = "Hello! I would like to get in touch with Gospel Extension Ministries.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber.replace(/[\s+]/g, '')}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <MessageCircle size={24} />
      {/* Text hidden on very small phones, visible on larger screens */}
      <span className="hidden sm:inline font-semibold text-sm">Contact Us</span>
    </motion.a>
  );
}