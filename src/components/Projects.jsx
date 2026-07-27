import { motion } from 'framer-motion'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-heading">Things I&apos;ve built</h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className="card-surface p-6 flex flex-col h-full group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest uppercase text-accent/80 border border-accent/20 rounded-full px-2.5 py-1">
                  {project.tag}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-text/40 group-hover:text-accent transition-colors text-lg"
                >
                  <FaGithub />
                </a>
              </div>

              <h3 className="font-display text-xl font-semibold text-text mt-5">
                {project.title}
              </h3>
              <p className="text-sm text-text/60 leading-relaxed mt-3 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-text/50 bg-white/5 rounded px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-6 hover:text-accent transition-colors"
              >
                View on GitHub <FaArrowRight className="text-xs" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
