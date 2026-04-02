// FILE: C:\Users\dasin\Downloads\pk-synergy\src\components\Navbar.jsx
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

const Navbar = ({ companyName }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] pt-3">
      <Container>
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[1.8rem] border border-white/60 bg-white/80 px-5 py-2 shadow-[0_20px_50px_rgba(12,20,16,0.08)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-5">
            <a href="#" className="group flex min-w-0 items-center gap-3">
              <img
                src={logo}
                alt="PK Synergy Solution logo"
                className="h-9 w-9 shrink-0 rounded-lg object-contain bg-white shadow-sm sm:h-10 sm:w-10"
              />

              <div className="min-w-0">
                {/* FIXED: Professional two-tone styling, semi-bold weight, matching the slate heading colors */}
                <h1 className="truncate text-lg font-semibold tracking-tight text-slate-950 sm:text-[1.3rem]">
                  PK Synergy <span className="text-brand">Solution</span>
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
              onClick={() => setOpen(!open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-900/10 bg-white text-brand shadow-sm transition hover:bg-emerald-50 lg:hidden"
              aria-label="Toggle menu"
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
                  className="mt-2 inline-flex w-fit rounded-2xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md"
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