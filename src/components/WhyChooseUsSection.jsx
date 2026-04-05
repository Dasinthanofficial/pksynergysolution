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
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute left-0 top-10 -z-10 h-72 w-72 rounded-full bg-lime-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-900/10 blur-3xl" />

      <Container>
        <div className="grid items-start gap-8 lg:gap-10 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-5 inline-flex rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand shadow-sm backdrop-blur sm:text-xs">
              Why Choose Us
            </span>

            <h2 className="max-w-3xl text-[clamp(2rem,7vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950">
              Human Expertise,
              <br />
              Powered by Technology
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              {text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-[0_30px_90px_rgba(12,20,16,0.08)] backdrop-blur sm:rounded-[2rem] sm:p-8 lg:p-10"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-brand p-4 text-white shadow-lg">
              <Sparkles size={22} />
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
              The PK Synergy Advantage
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative mt-5 overflow-hidden rounded-[1.5rem] border border-lime-300/30 bg-gradient-to-br from-[#0b3a29] via-brand to-[#0f5a3d] p-[1px] shadow-[0_0_18px_rgba(214,243,109,0.18),0_0_50px_rgba(13,74,51,0.22)] sm:rounded-[1.75rem]"
            >
              <div className="relative rounded-[1.45rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 sm:rounded-[1.68rem] sm:p-7">
                <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-lime-300/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 right-0 h-28 w-28 rounded-full bg-emerald-300/10 blur-3xl" />

                <p className="relative text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                  Managing a property in the North used to require a dozen phone
                  calls to relatives. With PK Synergy, it's as simple as an app.
                  We provide the "boots on the ground" and the "tech in the
                  cloud" to keep your Kilinochchi home at your fingertips.
                  Contact Mr. Nagendram today for a consultation.
                </p>
              </div>
            </motion.div>

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
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-brand"
                  />
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.25rem] bg-gradient-to-r from-brand to-brand-dark p-5 text-white shadow-lg sm:rounded-[1.5rem] sm:p-6">
              <p className="text-sm leading-7 text-white/85 sm:text-base">
                We guarantee your satisfaction.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseSection;