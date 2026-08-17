import { motion } from "framer-motion";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/personalInfo";
import { fadeUp, item, stagger, useAnimationProps } from "../lib/animations";

export default function About() {
  const anim = useAnimationProps();
  return (
    <Section id="about" aria-label="About me">
      <div className="container-max">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <motion.div
            {...anim}
            variants={fadeUp}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-brand-500/30 via-fuchsia-500/20 to-emerald-400/30 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <img
                src="/scorpion.webp"
                alt={`Portrait of ${personalInfo.name}`}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div {...anim} variants={stagger} className="flex flex-col gap-5">
            {personalInfo.bio.map((para, i) => (
              <motion.p
                key={i}
                variants={item}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={item} className="mt-2 flex flex-wrap gap-3">
              <a href={personalInfo.resumeUrl} download className="btn btn-primary">
                <DownloadIcon className="h-4 w-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-slate-800"
            >
              {personalInfo.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="order-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function DownloadIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
