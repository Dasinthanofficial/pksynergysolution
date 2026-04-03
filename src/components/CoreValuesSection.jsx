import { motion } from "framer-motion";
import { Gem, HandHeart, Shield, Sparkles, ArrowRight } from "lucide-react";
import Container from "./Container";

const icons = {
    Innovation: Sparkles,
    Sustainability: HandHeart,
    Integrity: Shield,
    "Client Focus": Gem,
};

const CoreValuesSection = ({ values }) => {
    return (
        <section id="values" className="py-20 sm:py-28 relative overflow-hidden">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                    {/* Left Side: Content matching the inspiration structure */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-xl pr-4 lg:pr-8"
                    >
                        <span className="mb-4 inline-flex rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand shadow-sm backdrop-blur">
                            Core Values
                        </span>

                        <h2 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                           Every Principle Behind Every Decision
                        </h2>

                        <p className="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg">
                            These values define how PK Synergy Solutions approaches management,
                            partnerships, and long-term growth. We pride ourselves on providing
                            the best strategies customized for each client's unique requirements in modern technology.
                        </p>

                    </motion.div>

                    {/* Right Side: 2x2 Grid of Cards */}
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 relative z-10 py-6">
                        {values.map((item, index) => {
                            const Icon = icons[item.title] || Sparkles;
                            // Highlight the first card to mimic the orange card from your inspiration
                            const isHighlighted = index === 0;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className={`relative flex flex-col justify-between rounded-[2rem] p-8 transition-transform duration-300 ${isHighlighted
                                        ? "bg-gradient-to-br from-brand to-brand-dark text-white shadow-2xl sm:-rotate-2 sm:scale-105 z-20"
                                        : "bg-white border border-emerald-900/5 shadow-[0_15px_40px_rgba(12,20,16,0.04)] hover:-translate-y-1 z-10"
                                        }`}
                                >
                                    <div>
                                        {/* Icon Circle */}
                                        <div
                                            className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full ${isHighlighted
                                                ? "bg-white/15 text-white"
                                                : "bg-brand-soft text-brand"
                                                }`}
                                        >
                                            <Icon size={26} />
                                        </div>

                                        <h3
                                            className={`mb-4 text-2xl font-bold tracking-tight ${isHighlighted ? "text-white" : "text-slate-950"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className={`text-sm leading-7 ${isHighlighted ? "text-white/85" : "text-slate-600"
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