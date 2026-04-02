import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SectionTitle = ({ eyebrow, title, description, align = "left" }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand shadow-sm backdrop-blur">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;