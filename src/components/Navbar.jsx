import { motion } from "framer-motion";
import Container from "./Container";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ companyName }) => {
  return (
    <div className="sticky top-4 z-50 pt-4">
      <Container>
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-[0_20px_60px_rgba(12,20,16,0.08)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <a href="#" className="text-sm font-bold tracking-tight text-brand sm:text-base">
              {companyName}
            </a>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-brand px-4 py-2 font-medium text-white transition hover:bg-brand-dark"
              >
                Connect
              </a>
            </nav>
          </div>
        </motion.header>
      </Container>
    </div>
  );
};

export default Navbar;