import { motion } from "framer-motion";
import { Gem, HandHeart, Shield, Sparkles } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const icons = {
  Innovation: Sparkles,
  Sustainability: HandHeart,
  Integrity: Shield,
  "Client Focus": Gem,
};

const itemVariant = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const CoreValuesSection = ({ values }) => {
  return (
    <section id="values" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Core Values"
          title="The Principles Behind Every Decision"
          description="These values define how PK Synergy Solution approaches management, partnerships, and long-term growth."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((item, index) => {
            const Icon = icons[item.title] || Sparkles;
            return (
              <motion.div
                key={item.title}
                custom={index}
                variants={itemVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[2rem] border border-emerald-900/10 bg-white/80 p-7 shadow-[0_20px_60px_rgba(12,20,16,0.06)] backdrop-blur transition hover:-translate-y-2"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-brand-soft p-3 text-brand">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CoreValuesSection;