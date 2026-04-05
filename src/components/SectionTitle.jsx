import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SectionTitle = ({ eyebrow, title, description, align = "left" }) => {
  const centered = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mb-10 sm:mb-12 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand shadow-sm backdrop-blur sm:text-xs">
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-[clamp(2rem,7vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-slate-950 ${
          centered ? "mx-auto max-w-4xl" : "max-w-4xl"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 ${
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;