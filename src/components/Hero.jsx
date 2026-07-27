import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa'

const roles = [
  'Software Developer',
  'AI & Machine Learning Enthusiast',
  'Deepfake Detection Researcher',
]

function useTypewriter(words, speed = 55, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* grid backdrop */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold mt-3 leading-[1.1]"
          >
            Abdullah Firoj
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-lg sm:text-xl text-text/70 font-medium h-8"
          >
            Computer Science Graduate ·{' '}
            <span className="text-accent font-mono">
              {typed}
              <span className="animate-blink">|</span>
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-text/60 leading-relaxed"
          >
            Computer Science graduate with a strong foundation in Software
            Development, Artificial Intelligence, and Machine Learning.
            Skilled in Python, Java, SQL, and AI application development,
            with research experience in Multimodal Deepfake Detection and
            Model Context Protocol (MCP).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-text text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-sm font-medium text-text/80 hover:border-accent hover:text-accent transition-colors"
            >
              <FaEnvelope /> Contact Me
            </a>
            <div className="flex items-center gap-3 ml-1">
              <a
                href="https://github.com/Afiroj313501"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/10 text-text/70 hover:text-accent hover:border-accent transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-firoj-900697375/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/10 text-text/70 hover:text-accent hover:border-accent transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        {/* signature element: floating terminal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="animate-float">
            <div className="card-surface shadow-2xl shadow-black/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-[#F87171]" />
                <span className="w-3 h-3 rounded-full bg-[#FBBF24]" />
                <span className="w-3 h-3 rounded-full bg-[#34D399]" />
                <span className="ml-3 font-mono text-xs text-text/40">profile.json</span>
              </div>
              <pre className="p-6 font-mono text-[13px] leading-6 text-text/80 overflow-x-auto">
{`{
  "name": "Abdullah Firoj",
  "role": "Software & AI Engineer",
  "focus": [`}
                <span className="text-accent">{`
    "Machine Learning",
    "Computer Vision",
    "Agentic AI / MCP"`}</span>
{`
  ],
  "research": `}<span className="text-primary">&quot;Multimodal Deepfake Detection&quot;</span>{`,
  "status": `}<span className="text-[#34D399]">&quot;open_to_work&quot;</span>{`
}`}
              </pre>
            </div>
            <div className="absolute -bottom-6 -left-6 card-surface px-4 py-3 shadow-xl shadow-black/40 hidden sm:block">
              <p className="font-mono text-xs text-text/50">building_with</p>
              <p className="font-mono text-sm text-accent mt-1">PyTorch · React · MCP</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
