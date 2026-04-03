import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import Container from "./Container";

const highlights = [
  "Tailored strategies for each estate",
  "Integration for Higher Productivity",
  "Ecological stewardship",
  "Long-term value creation",
];

const WhyChooseSection = ({ text }) => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute left-0 top-10 -z-10 h-72 w-72 rounded-full bg-lime-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-emerald-900/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          {/* left content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-5 inline-flex rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand shadow-sm backdrop-blur">
              Why Choose Us
            </span>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
              Human Expertise,
              <br />
              Powered by Technology
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {text}
            </p>
          </motion.div>

          {/* right panel */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_30px_90px_rgba(12,20,16,0.08)] backdrop-blur sm:p-10"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-brand p-4 text-white shadow-lg">
              <Sparkles size={22} />
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              The PK Synergy Advantage
            </h3>

            <div className="mt-8 grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl border border-emerald-900/10 bg-brand-soft/60 p-4"
                >
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-gradient-to-r from-brand to-brand-dark p-6 text-white shadow-lg">
              <p className="text-sm leading-7 text-white/85 sm:text-base">
                We cultivate your satisfaction.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseSection;