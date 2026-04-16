export default function Footer() {
  return (
    <footer className="bg-nyt-black text-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="masthead-rule mb-4" style={{ borderColor: "#333" }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif text-lg font-bold tracking-tight">The Aarya Times</p>
            <p className="font-sans text-xs text-gray-400 mt-0.5 uppercase tracking-wider">
              Purdue University · Aerospace Engineering · Class of 2028
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:aarya.m.mehta@gmail.com"
              className="font-sans text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/aaryamehta1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="masthead-rule mt-4" style={{ borderColor: "#333" }} />
        <p className="font-sans text-[10px] text-gray-600 text-center mt-3 uppercase tracking-widest">
          NYT Games Theme — Personal Website © 2025 Aarya Mehta
        </p>
      </div>
    </footer>
  );
}
