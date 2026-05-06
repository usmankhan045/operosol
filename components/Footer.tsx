"use client";

const NAV_SECTIONS = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Services", section: "services" },
  { label: "Portfolio", section: "portfolio" },
  { label: "Contact", section: "contact" },
];

const SERVICES = [
  "Digital FTEs",
  "Autonomous AI Agents",
  "Generative AI Solutions",
  "AI Workflow Automation",
  "AI Consulting & Strategy",
  "Custom AI Development",
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (section: string) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("home")} className="text-2xl font-bold tracking-tight mb-4 inline-block text-theme">
              Opero<span style={{ color: "var(--accent)" }}>sol</span>
            </button>
            <p className="text-sm leading-relaxed mt-3 max-w-xs" style={{ color: "var(--text-muted)" }}>
              We help businesses grow with AI, from intelligent automation to full-scale agentic systems built for real results.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--accent)" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {NAV_SECTIONS.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollTo(link.section)}
                    className="text-sm transition-colors duration-200 text-theme-muted hover:text-theme"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--accent)" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-sm transition-colors duration-200 text-theme-muted hover:text-theme text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--text-subtle)" }}>
            © {year} Operosol. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:hello@operosol.com"
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              hello@operosol.com
            </a>
            <a
              href="tel:+10000000000"
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--text-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              +1 (000) 000-0000
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
