import { motion, useReducedMotion, Variants } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[40px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
