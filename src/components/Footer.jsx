import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const Footer = ({ companyName }) => {
  return (
    <footer className="relative overflow-hidden bg-[#03140e] py-14 text-white sm:py-20">
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-lime-300/8 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/8 blur-3xl" />

      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:gap-12 sm:pb-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="text-center lg:text-left">
            <p className="text-xs font-['Outfit'] uppercase tracking-[0.28em] text-white/35">
              PK Synergy Solutions
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Precision. Growth. Sustainability.
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 lg:max-w-none">
              A forward-thinking firm at the intersection of agriculture,
              construction, and estate management, focused on modernization
              through innovation and sustainable strategy.
            </p>
          </div>

          <div className="text-center lg:text-left">
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

          <div className="text-center lg:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Services
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>Agriculture & Estate Management</li>
              <li>Construction & Infrastructure Development</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-center text-sm text-white/45 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end md:gap-5">
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