import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text/40">
          &copy; {new Date().getFullYear()} Abdullah Firoj. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4 text-text/50">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:[email protected]" aria-label="Email" className="hover:text-accent transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
