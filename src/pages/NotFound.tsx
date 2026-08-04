import { Link } from "react-router-dom";
import { personalInfo } from "../data/personalInfo";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="heading-gradient animate-gradient-shift text-7xl font-extrabold sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Back home
          </Link>
          <a
            href={personalInfo.siteRepo}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost"
          >
            Report an issue
          </a>
        </div>
      </div>
    </main>
  );
}
