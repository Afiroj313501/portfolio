import { motion } from 'framer-motion'

const stats = [
  { label: 'Research Papers', value: '2' },
  { label: 'Projects Built', value: '4+' },
  { label: 'Core Languages', value: '4' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">About</p>
          <h2 className="section-heading">Who I am</h2>

          <p className="mt-6 text-text/70 leading-relaxed">
            I am a Computer Science graduate from{' '}
            <span className="text-text font-medium">United International University</span>{' '}
            with a strong interest in Software Development, Artificial
            Intelligence, Machine Learning, and intelligent systems.
          </p>
          <p className="mt-4 text-text/70 leading-relaxed">
            My experience includes developing software applications,
            AI-based solutions, and conducting research on{' '}
            <span className="text-accent font-medium">
              Multimodal Deepfake Detection
            </span>{' '}
            and the{' '}
            <span className="text-accent font-medium">
              Model Context Protocol (MCP)
            </span>
            .
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-surface p-4 text-center">
                <p className="font-display text-2xl font-semibold text-primary">
                  {s.value}
                </p>
                <p className="text-xs text-text/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-surface p-6 sm:p-8"
        >
          <p className="font-mono text-xs text-text/40 mb-4"># focus_areas.py</p>
          <ul className="space-y-4">
            {[
              ['Software Development', 'Building reliable, well-structured applications end to end.'],
              ['Artificial Intelligence', 'Designing systems that reason, perceive, and act.'],
              ['Machine Learning', 'Turning data into models that generalize.'],
              ['Research', 'Investigating deepfake detection and agentic tool discovery via MCP.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <div>
                  <p className="text-text font-medium text-sm">{title}</p>
                  <p className="text-text/50 text-sm mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
