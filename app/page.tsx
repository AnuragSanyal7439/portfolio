const profile = {
  name: "Anurag Sanyal",
  headline: "Full Stack Developer | React, Django, Java",
  email: "sanyalanurag40@gmail.com",
  github: "https://github.com/AnuragSanyal7439",
  linkedin: "https://www.linkedin.com/in/anuragsanyal/",
  resume: "/resume.pdf"
};

const skills = [
  "React",
  "Next.js",
  "Django",
  "Java",
  "REST APIs",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
  "Vercel",
  "Problem Solving"
];

const projects = [
  {
    title: "BugOps",
    description:
      "A full stack issue tracking and workflow platform built for clean bug reporting, triage, status updates, and developer collaboration.",
    stack: ["React", "Django REST", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/AnuragSanyal7439/BugOps"
  },
  {
    title: "EV Charging Station App",
    description:
      "A practical application for helping users discover EV charging stations, review station details, and support a smoother charging workflow.",
    stack: ["React", "JavaScript", "REST APIs", "Responsive UI"],
    github: "https://github.com/AnuragSanyal7439/ev-charging-station-app-project"
  },
  {
    title: "Spotify Auth",
    description:
      "A Node.js authentication service that implements Spotify OAuth, session handling, API requests, and environment-based configuration.",
    stack: ["Node.js", "Express", "Spotify OAuth", "Axios"],
    github: "https://github.com/AnuragSanyal7439/Spotify-auth"
  }
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Contact", href: "#contact" }
];

type IconProps = {
  className?: string;
};

function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V15M12 15L7 10M12 15L17 10M5 21H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20V18H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.79 4.87 20.63 8.84 21.99C9.34 22.08 9.52 21.77 9.52 21.5C9.52 21.26 9.51 20.62 9.5 19.78C6.73 20.4 6.14 18.41 6.14 18.41C5.68 17.22 5.03 16.9 5.03 16.9C4.13 16.27 5.1 16.28 5.1 16.28C6.1 16.35 6.63 17.34 6.63 17.34C7.52 18.9 8.97 18.45 9.54 18.19C9.63 17.53 9.89 17.08 10.17 16.83C7.95 16.57 5.62 15.69 5.62 11.75C5.62 10.63 6.01 9.72 6.65 9.01C6.55 8.75 6.2 7.72 6.75 6.31C6.75 6.31 7.59 6.04 9.5 7.36C10.3 7.13 11.15 7.02 12 7.02C12.85 7.02 13.7 7.13 14.5 7.36C16.41 6.04 17.25 6.31 17.25 6.31C17.8 7.72 17.45 8.75 17.35 9.01C17.99 9.72 18.38 10.63 18.38 11.75C18.38 15.7 16.04 16.57 13.82 16.82C14.18 17.14 14.5 17.76 14.5 18.71C14.5 20.07 14.49 21.17 14.49 21.5C14.49 21.77 14.67 22.09 15.18 21.99C19.14 20.62 22 16.79 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.94 8.98H3.94V20H6.94V8.98ZM5.44 4C4.47 4 3.68 4.8 3.68 5.78C3.68 6.75 4.47 7.54 5.44 7.54C6.42 7.54 7.2 6.75 7.2 5.78C7.2 4.8 6.42 4 5.44 4ZM20.32 13.68C20.32 10.73 18.75 8.74 16.27 8.74C14.4 8.74 13.56 9.77 13.09 10.49V8.98H10.22V20H13.22V14.55C13.22 13.11 13.49 11.72 15.27 11.72C17.02 11.72 17.05 13.36 17.05 14.64V20H20.05L20.32 13.68Z" />
    </svg>
  );
}

function SectionHeading({
  label,
  title,
  description
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase text-brand">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted">{description}</p>
    </div>
  );
}

function ExternalLink({
  href,
  children,
  variant = "secondary",
  icon
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-brand"
      : "border border-slate-200 bg-white text-ink hover:border-brand hover:text-brand";

  return (
    <a className={`${base} ${styles}`} href={href} target="_blank" rel="noreferrer">
      {icon}
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3" aria-label="Portfolio home">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-bold text-white">
              AS
            </span>
            <span className="hidden text-sm font-semibold text-ink sm:block">
              {profile.name}
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-brand">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resume}
            download
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden bg-white">
        <div className="hero-grid absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-signal">Student full stack developer</p>
            <h1 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              I build responsive web applications with clean interfaces, reliable APIs,
              and practical backend design. I am focused on shipping thoughtful
              products and bringing that discipline to Affordmed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.resume}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                <DownloadIcon />
                Download Resume
              </a>
              <ExternalLink href={profile.github} icon={<GitHubIcon />}>
                GitHub
              </ExternalLink>
              <ExternalLink href={profile.linkedin} icon={<LinkedInIcon />}>
                LinkedIn
              </ExternalLink>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true">
            <div className="ml-auto max-w-md">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-brand" />
                <span className="h-3 w-3 rounded-full bg-signal" />
                <span className="h-3 w-3 rounded-full bg-ink" />
              </div>
              <div className="space-y-4 rounded-lg border border-slate-200 bg-white/90 p-6 shadow-soft">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-sm font-semibold text-ink">Portfolio Snapshot</span>
                  <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Open to opportunities
                  </span>
                </div>
                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-center justify-between">
                    <span>Frontend</span>
                    <span className="font-semibold text-ink">React, Next.js</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Backend</span>
                    <span className="font-semibold text-ink">Django, Java</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Deployment</span>
                    <span className="font-semibold text-ink">Vercel ready</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="text-2xl font-semibold text-ink">3</p>
                    <p className="mt-1 text-xs text-muted">Featured projects</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="text-2xl font-semibold text-ink">10</p>
                    <p className="mt-1 text-xs text-muted">Core skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-brand">About me</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              A practical builder with full stack range.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              I am a student developer focused on building useful software with
              clear interfaces, maintainable code, and dependable backend systems.
              My work combines React-based frontends, Django APIs, Java fundamentals,
              and database-backed product thinking.
            </p>
            <p>
              For Affordmed, I bring a product-minded engineering approach: understand
              the user workflow, keep the UI simple, design the API contract carefully,
              and deliver features that are easy to maintain.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Tools I use to build production-ready web apps"
          description="A focused stack for frontend delivery, backend APIs, data persistence, and deployment."
        />
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex min-h-16 items-center justify-center rounded-lg border border-slate-200 bg-paper px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Selected work for recruiter review"
          description="Selected projects that show product thinking, frontend execution, backend API design, and authentication workflow experience."
        />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted">{project.description}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ExternalLink href={project.github} icon={<GitHubIcon />} variant="primary">
                  GitHub Link
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="github" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-brand">GitHub</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Code that is organized for review.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              My GitHub profile is the best place to inspect project structure,
              commit history, API work, and implementation details across frontend
              and backend projects.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-paper p-6">
            <div className="flex items-center gap-3">
              <GitHubIcon className="h-6 w-6 text-ink" />
              <div>
                <p className="font-semibold text-ink">github.com/AnuragSanyal7439</p>
                <p className="mt-1 text-sm text-muted">Repositories, commits, and source code</p>
              </div>
            </div>
            <div className="mt-6">
              <ExternalLink href={profile.github} icon={<ArrowIcon />} variant="primary">
                View GitHub
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <section id="linkedin" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft lg:order-first">
            <div className="flex items-center gap-3">
              <LinkedInIcon className="h-6 w-6 text-brand" />
              <div>
                <p className="font-semibold text-ink">linkedin.com/in/anuragsanyal</p>
                <p className="mt-1 text-sm text-muted">Education, experience, and professional updates</p>
              </div>
            </div>
            <div className="mt-6">
              <ExternalLink href={profile.linkedin} icon={<ArrowIcon />} variant="primary">
                View LinkedIn
              </ExternalLink>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-brand">LinkedIn</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              A concise professional profile.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              LinkedIn gives recruiters a quick look at my education, project
              highlights, technical interests, and professional readiness for
              full stack developer roles.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase text-emerald-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Ready to discuss full stack opportunities.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200">
            I am available for student developer opportunities, internships, and
            full stack roles where I can contribute with React, Django, and Java.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
            >
              <MailIcon />
              Email Me
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>
          <p className="mt-5 text-sm font-medium text-slate-300">{profile.email}</p>
        </div>
      </section>

      <footer className="bg-white px-5 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. Full Stack Developer.</p>
          <div className="flex gap-4">
            <a href={profile.github} className="hover:text-brand" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} className="hover:text-brand" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
