
"use client";
import { motion } from "framer-motion";
import { Clock, MapPin, BookOpen } from "lucide-react";

const programs = [
  { day: "Sunday", title: "First Service", time: "8:00 AM - 9:30 AM", icon: BookOpen },
  { day: "Tuesday", title: "MInister's Training", time: "5:00 PM - 7:30 PM", icon: Clock },
  { day: "Wednesday", title: "Prayer Meeting", time: "5:00 PM - 7:30 PM", icon: MapPin },
  { day: "Thursday", title: "Bible Study", time: "5:00 PM - 7:30 PM", icon: BookOpen },
  { day: "Friday", title: "Missional Community", time: "6:00 PM - 7:00 PM", icon: BookOpen },
  { day: "Saturday", title: "Movers & Shakers", time: "4:00 PM - 7:00 PM", icon: BookOpen },
];

export default function WeeklyPrograms() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Grow With Us</h2>
          <h3 className="text-4xl font-extrabold text-blue-900">Weekly Programs</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 text-center hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900">
                <program.icon size={24} />
              </div>
              <p className="font-bold text-blue-600 mb-1">{program.day}</p>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h4>
              <p className="text-slate-500 font-medium">{program.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}