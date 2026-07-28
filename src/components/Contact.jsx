import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: '[Abdullah]', href: 'abdullahfiroj860@gmail.com' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/abdullah-firoj', href: 'https://github.com/' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/abdullah-firoj', href: 'https://linkedin.com/' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-heading">Let&apos;s work together</h2>
          <p className="mt-4 text-text/60 max-w-xl">
            Open to Software Engineer, AI Engineer, and Machine Learning
            Engineer roles. Reach out and I&apos;ll get back to you soon.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="card-surface p-5 flex items-center gap-4 hover:border-accent/40 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center text-lg shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs text-text/40">{item.label}</p>
                    <p className="text-sm text-text/80 mt-0.5">{item.value}</p>
                  </div>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card-surface p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-xs text-text/50 font-mono">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-text focus:border-accent outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs text-text/50 font-mono">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-text focus:border-accent outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-text/50 font-mono">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-text focus:border-accent outline-none transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-text text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 shadow-lg shadow-primary/20"
            >
              <FaPaperPlane className="text-xs" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-[#34D399] font-mono">
                Message sent — thanks for reaching out.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-[#F87171] font-mono">
                Couldn&apos;t send right now. Configure EmailJS keys in .env, or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
