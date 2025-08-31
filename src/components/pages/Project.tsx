import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/project";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Please check the URL or return to the projects list.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          {project.title}
        </h1>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
          {project.description}
        </p>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            🛠 Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-sm hover:shadow-md transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Problems Solved */}
        {project.problemsSolved?.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ✅ Problems We Solved
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {project.problemsSolved.map((problem, i) => (
                <li key={i} className="leading-relaxed">
                  {problem}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Case Study */}
        {cs && (
          <section className="mb-10 space-y-10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              📖 Case Study
            </h2>

            {cs.overview && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cs.overview}
                </p>
              </div>
            )}

            {cs.objectives && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Objectives
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {Array.isArray(cs.objectives)
                    ? cs.objectives.map((obj, i) => <li key={i}>{obj}</li>)
                    : <li>{cs.objectives}</li>}
                </ul>
              </div>
            )}

            {(cs.architecture) && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Architecture & Design
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cs.architecture}
                </p>
              </div>
            )}

            {cs.challenges && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Challenges & Solutions
                </h3>
                <ul className="space-y-4">
                  {cs.challenges.map((c, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">
                      <strong className="block text-gray-900 dark:text-white">
                        {c.problem}
                      </strong>
                      <span>{c.solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(cs.impact) && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Outcomes & Impact
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {(cs.impact).map(
                    (item, i) => <li key={i}>{item}</li>
                  )}
                </ul>
              </div>
            )}

            {cs.technicalHighlights ? (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Technical Highlights
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm shadow">
                  <code>{cs.technicalHighlights}</code>
                </pre>
              </div>
            ) : null}
          </section>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 font-medium shadow hover:opacity-90 transition"
            >
              View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
