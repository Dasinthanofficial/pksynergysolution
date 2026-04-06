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

const ServiceCard = ({ pillar, index }) => {
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-[linear-gradient(180deg,rgba(11,68,46,0.96),rgba(8,58,39,0.98))] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/20 sm:rounded-[2.5rem] sm:p-8 xl:p-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(214,243,109,0.08),transparent_65%)]" />

      <div className="relative z-10 mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/6 bg-white/5 text-lime-300 shadow-inner shadow-black/20 sm:h-14 sm:w-14">
          <Icon size={26} strokeWidth={1.6} />
        </div>

        <h3 className="min-w-0 flex-1 text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl xl:text-[2rem]">
          {pillar.title}
        </h3>
      </div>

      <p className="relative z-10 mb-7 text-sm leading-7 text-white/72 sm:mb-8 sm:text-base sm:leading-relaxed">
        {pillar.description}
      </p>

      <div className="relative z-10 mb-7 h-px w-full bg-white/10 sm:mb-8" />

      <ul className="relative z-10 mt-auto flex flex-col gap-3.5 sm:gap-4">
        {pillar.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0 text-lime-300"
            />
            <span className="text-sm leading-7 text-white/82 sm:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[#04281b]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(circle_at_top_left,rgba(213,243,111,0.18),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background:radial-gradient(circle_at_center,rgba(13,74,51,0.35),transparent_45%)]" />

      <Container>
        <div className="mx-auto max-w-[98rem]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="mb-10 sm:mb-14"
          >
            <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-300 backdrop-blur sm:text-xs">
              Our Core Focus
            </span>

            <h2 className="max-w-5xl text-[clamp(2rem,7vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
              PK Synergy Solutions stands on two strong pillars
            </h2>
          </motion.div>

          <div className="grid items-stretch gap-6 xl:grid-cols-2 xl:gap-8 2xl:gap-10">
            <div className="min-w-0">
              <ServiceCard pillar={pillars[0]} index={0} />
            </div>

            <div className="min-w-0">
              <ServiceCard pillar={pillars[1]} index={1} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;