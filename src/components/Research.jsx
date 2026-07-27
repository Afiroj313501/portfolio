import { motion } from 'framer-motion'
import { research } from '../data/projects'

export default function Research() {
  return (
    <section id="research" className="py-24 sm:py-32 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Research</p>
          <h2 className="section-heading">Published & ongoing work</h2>
        </motion.div>

        <div className="mt-14 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 hidden sm:block" />
          <div className="space-y-10">
            {research.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative sm:pl-10"
              >
                <span className="hidden sm:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-accent" />
                <div className="card-surface p-6">
                  <p className="font-mono text-xs text-accent">{item.publisher}</p>
                  <h3 className="font-display text-lg font-semibold text-text mt-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text/60 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
