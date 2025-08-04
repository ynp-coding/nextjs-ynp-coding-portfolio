"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

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
    <section
      id="contact"
      className="container min-h-screen px-4 py-24 mx-auto sm:px-8"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-4 text-4xl font-bold text-gray-900">ติดต่อเรา</h2>
        <p className="mb-12 text-gray-700">
          อย่าลังเลที่จะติดต่อเราผ่านช่องทางใดๆ ด้านล่างนี้
        </p>

        {/* Contact Cards */}
        <div className="grid gap-6 text-left sm:grid-cols-2">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 bg-white shadow-md rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {item.icon}
              <div>
                <p className="font-semibold text-gray-700">{item.label}</p>
                <p className="text-sm text-gray-600">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
