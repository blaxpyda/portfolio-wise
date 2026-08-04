import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { skillCategories, skills } from "../data/skills";
import { item, stagger, useAnimationProps } from "../lib/animations";

export default function Skills() {
  const anim = useAnimationProps();
  return (
    <Section id="skills" aria-label="Skills">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Tools of the trade"
          subtitle="The technologies I reach for most often, grouped by discipline. Hover for proficiency."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const catSkills = skills.filter((s) => s.category === category);
            return (
              <motion.div
                key={category}
                {...anim}
                variants={stagger}
                className="card p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                  {category}
                </h3>
                <ul className="mt-5 grid grid-cols-2 gap-3">
                  {catSkills.map((skill) => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function SkillItem({
  name,
  icon,
  proficiency,
}: {
  name: string;
  icon: string;
  proficiency: number;
}) {
  const [show, setShow] = useState(false);
  return (
    <motion.li
      variants={item}
      className="relative flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-4 text-center transition-colors hover:border-brand-300 hover:bg-brand-50/60 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-brand-700 dark:hover:bg-slate-800"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {name}
      </span>
      {show && (
        <span
          role="tooltip"
          className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white shadow-lg dark:bg-brand-600"
        >
          {proficiency}% proficiency
        </span>
      )}
    </motion.li>
  );
}
