/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { motion } from 'framer-motion'; // ✅ Required import

import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const items = [
  {
    icon: icon1,
    title: 'World‑Class Faculty',
    desc: 'Learn from industry-leading experts combining real-world experience with innovative teaching techniques.',
  },
  {
    icon: icon2,
    title: 'Direct Interaction',
    desc: 'Expert guidance with instant answers, personalized feedback, and an enhanced learning experience.',
  },
  {
    icon: icon3,
    title: 'Cutting‑Edge Curriculum',
    desc: 'Our curriculum is updated regularly to align with the latest industry trends and demands.',
  },
  {
    icon: icon4,
    title: 'Innovative Learning',
    desc: 'We provide an engaging learning environment enhanced by technology and modern resources.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
          Explore Yourself All Over The World
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img src={it.icon} alt={it.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{it.title}</h3>
              <p className="text-gray-600 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
