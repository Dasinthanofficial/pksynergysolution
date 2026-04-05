import { motion } from "framer-motion";
import { Gem, HandHeart, Shield, Sparkles } from "lucide-react";
import Container from "./Container";

const icons = {
  Innovation: Sparkles,
  Sustainability: HandHeart,
  Integrity: Shield,
  "Client Focus": Gem,
};

const CoreValuesSection = ({ values }) => {
  return (
    <section
      id="values"
      className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl lg:pr-8"
          >
            <span className="mb-4 inline-flex rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand shadow-sm backdrop-blur sm:text-xs">
              Core Values
            </span>

            <h2 className="mb-6 text-[clamp(2rem,7vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-slate-950">
              Every Principle Behind Every Decision
            </h2>

            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
              These values define how PK Synergy Solutions approaches
              management, partnerships, and long-term growth. We pride
              ourselves on providing the best strategies customized for each
              client&apos;s unique requirements in modern technology.
            </p>
          </motion.div>

          <div className="relative z-10 grid gap-4 py-2 sm:grid-cols-2 sm:gap-6 sm:py-6 lg:py-10">
            {values?.map((item, index) => {
              const Icon = icons[item.title] || Sparkles;
              const isHighlighted = index === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex h-full flex-col justify-start rounded-[1.75rem] p-6 transition-transform duration-300 sm:p-8 ${
                    isHighlighted
                      ? "origin-bottom-right z-20 bg-gradient-to-br from-brand to-brand-dark text-white shadow-2xl sm:-rotate-1 sm:scale-[1.02] lg:-rotate-2 lg:scale-105"
                      : "z-10 border border-emerald-900/5 bg-white shadow-[0_15px_40px_rgba(12,20,16,0.04)] hover:-translate-y-1"
                  }`}
                >
                  <div
                    className={`mb-6 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
                      isHighlighted
                        ? "bg-white/15 text-white shadow-inner"
                        : "bg-brand/10 text-brand"
                    }`}
                  >
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <div className="flex flex-grow flex-col">
                    <h3
                      className={`mb-3 text-xl font-bold tracking-tight sm:text-2xl ${
                        isHighlighted ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm leading-7 sm:leading-relaxed ${
                        isHighlighted ? "text-white/85" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoreValuesSection;