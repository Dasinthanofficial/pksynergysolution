import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const Footer = ({ companyName }) => {
  return (
    <footer className="relative overflow-hidden bg-[#03140e] py-16 text-white sm:py-20">
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-lime-300/8 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/8 blur-3xl" />

      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div>
            <p className="text-xs font-['Outfit'] uppercase tracking-[0.28em] text-white/35">
              PK Synergy Solution
            </p>

            <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Precision. Growth. Sustainability.
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
              A forward-thinking firm at the intersection of agriculture,
              construction, and estate management, focused on modernization
              through innovation and sustainable strategy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Navigation
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>
                <a href="#" className="transition hover:text-lime-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-lime-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-lime-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#values" className="transition hover:text-lime-300">
                  Values
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-lime-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Services
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>Estate Management</li>
              <li>Tech Integration</li>
              <li>Sustainable Cultivation</li>
              <li>Project Consultancy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <span>Agriculture</span>
            <span>Construction</span>
            <span>Estate Management</span>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-medium text-lime-300 transition hover:text-white"
            >
              Back to top
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;