"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import Image from "next/image";

const contactItems = [
  {
    icon: <Mail className="w-6 h-6 text-blue-500" />,
    label: "Email",
    value: "onlinepon@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6 text-red-500" />,
    label: "Location",
    value: "Nonthaburi, Thailand",
  },
  {
    icon: (
      <Image
        src="/line-icon.png"
        alt="LINE"
        width={24}
        height={24}
        className="rounded"
      />
    ),
    label: "LINE",
    value: "@341eoawp",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-8 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900">ติดต่อเรา</h2>
        <p className="text-gray-700 mb-12">
          อย่าลังเลที่จะติดต่อเราผ่านช่องทางใดๆ ด้านล่างนี้
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {item.icon}
              <div>
                <p className="text-gray-700 font-semibold">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
