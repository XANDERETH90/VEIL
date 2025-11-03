'use client'

import { motion } from 'framer-motion'
import { AnimatedButton } from '../components/AnimatedButton'
import { FeatureCard } from '../components/FeatureCard'
import { Section } from '../components/Section'

const features = [
  {
    title: 'Batch Payments',
    desc: 'Upload a CSV or paste wallet list to pay hundreds in seconds.',
  },
  {
    title: 'Automated Schedules',
    desc: 'Weekly or monthly payroll with on-chain receipts for each run.',
  },
  {
    title: 'Analytics & Export',
    desc: 'Unified dashboard, downloadable CSVs, and webhook callbacks.',
  },
  {
    title: 'Optional Compliance',
    desc: 'Plug-in address screening or KYC vendors when you need it.',
  },
]

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Section className="pt-16 pb-28">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow"></span>
            Live on Solana (v1: $VEIL payouts)
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            className="mt-6 text-5xl sm:text-6xl font-display tracking-tight"
          >
            Crypto payroll, <span className="gradient-text">made simple.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-white/70"
          >
            Send mass payouts on Solana with one click. Start with $VEIL payouts, expand to USDC in v2, and multi‑token in v3.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <AnimatedButton href="#" glow>Launch App</AnimatedButton>
            <AnimatedButton href="#features" variant="ghost">Read Whitepaper</AnimatedButton>
          </motion.div>

          {/* Hero Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 section"
          >
            <div className="card card-hover p-6">
              <div className="text-white/60 text-sm">Per-batch</div>
              <div className="mt-2 text-2xl font-semibold">Up to 1,000 recipients</div>
            </div>
            <div className="card card-hover p-6">
              <div className="text-white/60 text-sm">Avg fee</div>
              <div className="mt-2 text-2xl font-semibold">$0.002/tx on Solana</div>
            </div>
            <div className="card card-hover p-6">
              <div className="text-white/60 text-sm">v2</div>
              <div className="mt-2 text-2xl font-semibold">USDC integration</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-display"
        >
          How it works
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Upload CSV', 'Schedule payout', 'Approve & send'].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="animated-border"
            >
              <div className="inner p-6 rounded-xl">
                <div className="text-white/60 text-sm">Step {i+1}</div>
                <div className="mt-2 text-xl font-semibold">{step}</div>
                <p className="mt-2 text-white/70">Secure, auditable, and fast. Each batch produces a verifiable on-chain receipt.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-display"
        >
          Features
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} desc={f.desc} index={i} />
          ))}
        </div>
      </Section>

      {/* TOKEN */}
      <Section id="token" className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display">Token utility</h2>
            <p className="mt-4 text-white/70">Use $VEIL for API credits, fee discounts, and higher batch limits. Govern integrations and roadmap features over time.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['API credits', 'Fee discounts', 'Batch limits', 'Governance'].map((t, i) => (
                <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">{t}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="animated-border"
          >
            <div className="inner p-8 rounded-xl">
              <div className="text-white/60 text-sm">Roadmap</div>
              <ul className="mt-3 space-y-2">
                <li>v1 — $VEIL payouts</li>
                <li>v2 — USDC integration</li>
                <li>v3 — Multi‑token support</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-display">Ready to streamline crypto payroll?</h2>
          <p className="mt-3 text-white/70">Launch the app or read the docs to get started.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <AnimatedButton href="#" glow>Launch App</AnimatedButton>
            <AnimatedButton href="#" variant="ghost">Read Whitepaper</AnimatedButton>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-8 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} VeilPay — Built on Solana
      </footer>
    </main>
  )
}