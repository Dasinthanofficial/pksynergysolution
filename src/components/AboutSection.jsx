import { motion } from "framer-motion";
import { Eye, Goal } from "lucide-react"; // Changed 'Target' to 'Goal'
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const AboutSection = ({ data }) => {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      <Container>
        <SectionTitle
          eyebrow="The Foundation"
          title="Vision & Mission"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_60px_rgba(13,74,51,0.08)] border border-emerald-900/5"
        >
          {/* Diagonal Split Background */}
          <div 
            className="absolute inset-0 z-0 bg-gradient-to-br from-brand to-[#062c1e] 
                       [clip-path:polygon(0_0,100%_0,100%_48%,0_52%)] 
                       md:[clip-path:polygon(0_0,62%_0,38%_100%,0_100%)]
                       lg:[clip-path:polygon(0_0,58%_0,42%_100%,0_100%)]" 
          />

          <div className="relative z-10 grid md:grid-cols-2 auto-rows-fr">
            
            {/* Left Column: Vision Section */}
            <div className="flex flex-col p-8 sm:p-12 lg:p-16">
              <div className="max-w-[18rem] sm:max-w-xs">
                <h3 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-[1.05] drop-shadow-md">
                  Our<br />Vision
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {data.vision}
                </p>
              </div>
              
              <div className="mt-12 sm:mt-16 flex justify-start pl-2 sm:pl-8">
                <div className="rounded-full bg-white/10 p-5 backdrop-blur-sm shadow-xl border border-white/10">
                  <Eye size={48} strokeWidth={1.5} className="text-white" />
                </div>
              </div>
            </div>

            {/* Right Column: Mission Section */}
            <div className="flex flex-col p-8 sm:p-12 lg:p-16">
              <div className="flex justify-end pr-2 sm:pr-8 md:pr-0">
                <div className="rounded-full bg-brand/5 p-5 shadow-lg border border-brand/10">
                  {/* Fixed Icon Here */}
                  <Goal size={48} strokeWidth={1.5} className="text-brand" />
                </div>
              </div>

              <div className="mt-12 sm:mt-16 max-w-[18rem] sm:max-w-xs self-start md:ml-auto lg:ml-0 md:pl-8 lg:pl-16">
                <h3 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-brand mb-6 leading-[1.05] drop-shadow-sm">
                  Our<br />Mission
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {data.mission}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;