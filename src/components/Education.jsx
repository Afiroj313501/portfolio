import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const educationItems = [
  {
    institution: 'United International University (UIU)',
    details: 'Bachelor of Science in Computer Science and Engineering',
    period: '2022 — 2026',
  },
  {
    institution: 'Ghatail Cantonment College',
    details: " HSC' 'Science, GPA: 5.00",
    period: '2017 — 2019',
  },
  {
    institution: 'BBK High School',
    details: 'SSC, GPA: 5.00',
    period: '2012 — 2017',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Education</p>
          <h2 className="section-heading">Academic background</h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.08 }}
              className="card-surface p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xl shrink-0">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-text">
                  {item.institution}
                </h3>
                <p className="text-text/60 mt-1">{item.details}</p>
                <p className="font-mono text-xs text-accent mt-2">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
