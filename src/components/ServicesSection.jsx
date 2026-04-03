import { motion } from "framer-motion";
import { Sprout, Building2, CheckCircle2 } from "lucide-react";
import Container from "./Container";

const pillars = [
  {
    title: "Agriculture & Estate Management",
    description:
      "Ensuring productivity, sustainability, and long-term value through modern farming practices and strategic oversight.",
    icon: Sprout,
    features: [
      "Estate oversight and day-to-day operations",
      "Smart irrigation and water resource management",
      "Sustainable cultivation (eco-friendly fertilization, crop rotation, harvesting)",
      "Precision farming tools (drones, sensors, IoT)",
      "Data-driven decision support systems and digital dashboards",
      "Long-term growth planning, investment strategies, and risk management",
    ],
  },
  {
    title: "Construction & Infrastructure Development",
    description:
      "Building the physical foundation estates need to thrive, from irrigation systems to housing and processing facilities.",
    icon: Building2,
    features: [
      "Construction of estate buildings, housing, and worker facilities",
      "Roads, bridges, and irrigation systems",
      "Smart home management system",
      "Renewable energy integration (solar, biogas, etc.)",
      "Sustainable construction practices aligned with ecological stewardship",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#04281b]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 -z-10 opacity-20 [background:radial-gradient(circle_at_top_left,rgba(213,243,111,0.2),transparent_35%)]" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-300 backdrop-blur">
            Our Core Focus
          </span>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            PK Synergy Solutions stands on <br /> two strong pillars
          </h2>
        </motion.div>

        {/* 2-Card Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="group flex flex-col rounded-[2.5rem] border border-[#114d36] bg-[#0a3625] p-8 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-lime-900/50 hover:bg-[#0c3e2a] sm:p-10"
              >
                {/* Icon + Heading */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-[#124b33] text-lime-400 shadow-inner">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="min-w-0 flex-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {pillar.title}
                  </h3>
                </div>

                <p className="mb-8 text-base leading-relaxed text-white/70">
                  {pillar.description}
                </p>

                {/* Divider */}
                <div className="mb-8 h-px w-full bg-[#114d36]" />

                {/* Bullet Points */}
                <ul className="mt-auto flex flex-col gap-4">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-lime-400/80"
                      />
                      <span className="text-sm leading-7 text-white/80 sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;