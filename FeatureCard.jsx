'use client'

import { motion } from 'framer-motion'

export function FeatureCard({ title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="card card-hover p-6"
    >
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-white/70">{desc}</p>
    </motion.div>
  )
}