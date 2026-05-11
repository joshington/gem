
"use client";
import { motion } from "framer-motion";
import { PlayCircle, BookOpen } from "lucide-react";

const sermons = [
  { title: "Church Is Family", date: "Feb" },
  { title: "Stretch To Grow", date: "Jan" },
  { title: "SignPosts To Your Destiny", date: "Dec" },
];

export default function LiveAndSermons() {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Recent Sermon Series</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Stream Section (2/3 of width) */}
          <div className="lg:col-span-2">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
            >
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/IToJxm-ODgM?si=hbsEopqpG9UtJq5e" 
                title="Live Stream"
              ></iframe>
            </motion.div>
            <div className="mt-4 flex items-center gap-2 text-blue-900 font-bold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              LIVE NOW
            </div>
          </div>

          {/* Recent Sermons List (1/3 of width) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-blue-600" /> Past Sermons
            </h3>
            <div className="space-y-6">
              {sermons.map((sermon, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-1">{sermon.date}</p>
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-900 transition">
                    {sermon.title}
                  </h4>
                  <div className="h-px bg-slate-100 mt-4"></div>
                </div>
              ))}
              <a href="https://youtube.com/@henrymusana?si=qcOD3zrsaU1vdO24">
                <button className="w-full mt-4 py-3 border-2 border-blue-900 text-white bg-blue-900 rounded-xl font-bold hover:bg-blue-900 hover:text-white transition">
                    View Sermons
                </button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}