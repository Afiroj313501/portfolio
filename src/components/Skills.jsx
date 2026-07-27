import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-heading">What I work with</h2>
        </motion.div>

        <div className="mt-14 space-y-12">
          {skillGroups.map((group, gi) => (
            <div key={group.id}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
                className="font-mono text-xs tracking-widest uppercase text-text/40 mb-4"
              >
                {group.title}
              </motion.p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.35, delay: i * 0.03 }}
                      whileHover={{ y: -4, borderColor: '#06B6D4' }}
                      className="card-surface flex items-center gap-2.5 px-4 py-2.5 text-sm text-text/80 hover:text-accent transition-colors cursor-default"
                    >
                      <Icon className="text-primary text-base" />
                      {skill.name}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
