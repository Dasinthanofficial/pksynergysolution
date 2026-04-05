import { motion } from "framer-motion";
import { Sprout, Building2, CheckCircle2 } from "lucide-react";
import Container from "./Container";
import sriLankaMap from "../assets/sri-lanka-map.png";

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
      className="group flex h-full min-w-0 flex-col rounded-[2rem] border border-[#114d36] bg-[#0a3625] p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-lime-900/50 hover:bg-[#0c3e2a] sm:rounded-[2.5rem] sm:p-8 xl:p-10"
    >
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-[#124b33] text-lime-400 shadow-inner sm:h-14 sm:w-14">
          <Icon size={26} strokeWidth={1.5} />
        </div>

        <h3 className="min-w-0 flex-1 text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl xl:text-[2rem]">
          {pillar.title}
        </h3>
      </div>

      <p className="mb-7 text-sm leading-7 text-white/70 sm:mb-8 sm:text-base sm:leading-relaxed">
        {pillar.description}
      </p>

      <div className="mb-7 h-px w-full bg-[#114d36] sm:mb-8" />

      <ul className="mt-auto flex flex-col gap-3.5 sm:gap-4">
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
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[#04281b]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 -z-10 opacity-20 [background:radial-gradient(circle_at_top_left,rgba(213,243,111,0.2),transparent_35%)]" />

      <Container>
        <div className="mx-auto max-w-[96rem]">
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

          <div className="grid items-center gap-6 xl:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)] xl:gap-8 2xl:grid-cols-[minmax(0,1fr)_260px_minmax(0,1fr)] 2xl:gap-10">
            <div className="min-w-0">
              <ServiceCard pillar={pillars[0]} index={0} />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-2 flex flex-col items-center justify-center py-2 text-center xl:order-none xl:py-0"
            >
              <div className="mb-5 sm:mb-6">
                <span className="inline-flex rounded-full border border-lime-300/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-lime-300 backdrop-blur sm:text-xs">
                  Focus Areas
                </span>
              </div>

              <div className="relative mx-auto w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[240px] xl:max-w-[220px] 2xl:max-w-[260px]">
                <div className="absolute inset-6 rounded-full bg-lime-300/10 blur-3xl" />
                <img
                  src={sriLankaMap}
                  alt="Map highlighting Northern Sri Lanka focus areas"
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                />
              </div>
            </motion.div>

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