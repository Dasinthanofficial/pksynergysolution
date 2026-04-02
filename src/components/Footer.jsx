import { Leaf, MoveUpRight } from "lucide-react";
import Container from "./Container";

const Footer = ({ companyName }) => {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-900/10 bg-white/60 py-10 backdrop-blur">
      <div className="absolute left-0 top-0 -z-10 h-40 w-40 rounded-full bg-lime-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-40 w-40 rounded-full bg-emerald-900/10 blur-3xl" />

      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-brand p-3 text-white shadow-md">
                <Leaf size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {companyName}
                </h3>
                <p className="text-sm text-slate-500">
                  Agriculture • Construction • Estate Management
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-6">
            <a href="#about" className="transition hover:text-brand">
              About
            </a>
            <a href="#services" className="transition hover:text-brand">
              Services
            </a>
            <a href="#values" className="transition hover:text-brand">
              Values
            </a>
            <a href="#contact" className="transition hover:text-brand">
              Contact
            </a>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:opacity-80"
          >
            Back to top
            <MoveUpRight size={16} />
          </a>
        </div>

        <div className="mt-8 border-t border-emerald-900/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;