import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personalInfo } from "../data/personalInfo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white/60 py-10 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="container-max flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.siteRepo}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            View source on GitHub
          </a>
        </div>
        <BackToTop />
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/30 transition-colors hover:bg-brand-700"
          aria-label="Back to top"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
