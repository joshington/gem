
import * as LucideIcons from "lucide-react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Gospel Extension Ministries</h3>
          <p className="text-blue-200 leading-relaxed">
            Spreading the gospel to the ends of the earth with love, truth, and community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4 text-white">Quick Links</h3>
          <ul className="text-blue-200 space-y-2">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#ministries" className="hover:text-white transition">Ministries</a></li>
            <li><a href="#contact" className="hover:text-white transition">Get Directions</a></li>
          </ul>
        </div>

        {/* Socials & Contact */}
        <div>
          <h3 className="font-bold mb-4 text-white">Connect With Us</h3>
         
          <p className="text-blue-200 text-sm">contact@gospelextension.org</p>
            <p className="text-blue-200 text-sm">opposite Adonai Gardens, Off Nyanama - Kitebi Rd, Kampala Uganda</p>
                <p className="text-blue-200 text-sm">+256 751 584 016</p>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-800 text-center text-blue-400 text-sm">
        © {new Date().getFullYear()} Gospel Extension Ministries. All rights reserved.
      </div>
      <div className="flex gap-4 mb-6">
      <a href="https://youtube.com/@YourHandle" target="_blank" className="bg-blue-800 p-3 rounded-full hover:bg-orange-500 transition">
        <FaYoutube size={20} />
      </a>
      <a href="https://tiktok.com/@YourHandle" target="_blank" className="bg-blue-800 p-3 rounded-full hover:bg-orange-500 transition">
        <FaTiktok size={20} />
      </a>
      <a href="https://instagram.com/@YourHandle" target="_blank" className="bg-blue-800 p-3 rounded-full hover:bg-orange-500 transition">
        <FaInstagram size={20} />
      </a>
    </div>
    </footer>
  );
}