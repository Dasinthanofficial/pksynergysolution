import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "./Container";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Values", href: "#values" },
];

const Navbar = ({ companyName = "PK Synergy Solutions" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] pt-2 sm:pt-3">
      <Container>
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[1.35rem] border border-white/60 bg-white/80 px-3 py-2.5 shadow-[0_20px_50px_rgba(12,20,16,0.08)] backdrop-blur-xl sm:rounded-[1.8rem] sm:px-5"
        >
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <a href="#" className="group flex min-w-0 items-center gap-3">
              <img
                src={logo}
                alt="PK Synergy Solutions logo"
                className="h-10 w-10 shrink-0 rounded-full bg-white object-cover shadow-md ring-1 ring-slate-900/5 sm:h-11 sm:w-11"
              />

              <div className="min-w-0 max-w-[11rem] min-[390px]:max-w-[14rem] sm:max-w-none">
                <h1 className="truncate font-['Outfit'] text-sm tracking-tight text-slate-900 min-[390px]:text-[15px] sm:text-base lg:text-xl">
                  {companyName}
                </h1>
              </div>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-brand"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                className="ml-2 inline-flex items-center rounded-2xl bg-brand px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(13,74,51,0.20)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Connect
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-900/10 bg-white text-brand shadow-sm transition hover:bg-emerald-50 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 border-t border-emerald-900/10 pt-3 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-brand"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md"
                >
                  Connect
                </a>
              </div>
            </motion.div>
          )}
        </motion.header>
      </Container>
    </div>
  );
};

export default Navbar;