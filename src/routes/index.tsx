import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import analyticsImg from "@/assets/project-analytics.jpg";
import gamesImg from "@/assets/project-games.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { group: "Data", items: ["Power BI", "SQL", "Microsoft Excel"] },
  { group: "Languages", items: ["Java", "C", "JavaScript"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { group: "Foundations", items: ["DBMS", "OOP", "Data Structures"] },
  { group: "Tools", items: ["Git", "GitHub"] },
];

const PROJECTS = [
  {
    n: "01",
    title: "Student Result Management System",
    kicker: "Data · Analytics · SQL",
    year: "2026",
    image: analyticsImg,
    body: "An interactive Power BI dashboard powered by a SQL backend and Excel-cleaned data — visualizing subject-wise performance, pass/fail rates, and cohort trends with 100% data integrity from source to insight.",
    stack: ["Power BI", "SQL", "Excel"],
    link: "https://drive.google.com/file/d/1Rj9ZhmMsurNuP6huEmqBFfTDpwLWrF7b/view?usp=sharing",
  },
  {
    n: "02",
    title: "Browser-Based Mini Games Platform",
    kicker: "Interaction · Web · Play",
    year: "2025",
    image: gamesImg,
    body: "Two interactive games — Mini Computer Game and Dual Game — shipped end-to-end. Real-time scoring, responsive layouts, and zero-install browser playback deployed via GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/kunalrawatt09",
  },
];

const CERTS = [
  { title: "MongoDB Basics for Students", issuer: "MongoDB · Credly", date: "Jul 2026" },
  { title: "Gemini Certified Student", issuer: "Google for Education", date: "May 2026 — May 2029" },
];

function Portfolio() {
  const [t, setT] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setT(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }),
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-ink/70 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <a href="#top" className="font-display text-lg tracking-tight">
            Kunal
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-parchment transition-colors"
              >
                <span className="text-ember mr-1">0{i + 1}</span>
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-widest border border-border hover:border-ember hover:text-ember px-4 py-2 rounded-full transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32 grain ink-gradient"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-ember opacity-20 blur-[140px] animate-glow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-ember-glow opacity-10 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground animate-rise">
            <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
            Available for internships · Sahibabad, IN · {t || "--:--"}
          </div>

          <h1
            className="font-display font-light text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] tracking-tighter animate-rise"
            style={{ animationDelay: "0.1s" }}
          >
            Kunal
            <br />
            <span className="italic text-ember">Rawat</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p
              className="md:col-span-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-rise"
              style={{ animationDelay: "0.25s" }}
            >
              I build <span className="text-parchment">interactive dashboards</span>, structured{" "}
              <span className="text-parchment">SQL systems</span>, and playful{" "}
              <span className="text-parchment">web experiences</span> — turning raw data into
              stories worth reading.
            </p>
            <div
              className="md:col-span-4 md:col-start-9 flex flex-col gap-3 font-mono text-xs animate-rise"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground uppercase tracking-widest">Role</span>
                <span>BCA · Data / Web</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground uppercase tracking-widest">Focus</span>
                <span>Analytics · Frontend</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground uppercase tracking-widest">Grad</span>
                <span>Class of 2028</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 md:mt-24 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="relative aspect-[16/7] overflow-hidden rounded-lg border border-border glow-ember">
            <img
              src={heroImg}
              alt="Portrait of Kunal Rawat rendered in data particles"
              width={1600}
              height={700}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              ↓ scroll · portfolio 2026
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-8 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-16 pr-16 font-display italic text-4xl md:text-6xl">
              {[
                "Power BI",
                "SQL",
                "JavaScript",
                "Data Storytelling",
                "Java",
                "Excel",
                "Curiosity",
                "GitHub",
                "Problem Solving",
              ].map((w) => (
                <span key={w} className="flex items-center gap-16">
                  <span className="text-parchment">{w}</span>
                  <span className="text-ember">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 md:py-40 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-ember mb-4">
              § Selected Work
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-tighter">
              Things I've <span className="italic">built.</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted-foreground">
            02 · projects
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {PROJECTS.map((p, i) => (
            <article
              key={p.n}
              className="grid md:grid-cols-12 gap-6 md:gap-12 items-center"
            >
              <div className={`md:col-span-7 relative group ${i % 2 ? "md:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-lg border border-border aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                </div>
              </div>
              <div className="md:col-span-5 space-y-6">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-ember">{p.n}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
                  {p.title}
                </h3>
                <div className="font-mono text-xs uppercase tracking-widest text-ember">
                  {p.kicker}
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono uppercase tracking-widest border border-border px-3 py-1.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-ember hover:text-ember-glow transition"
                  >
                    View on GitHub <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-40 border-t border-border grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-ember mb-4">
              § About
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light tracking-tighter leading-none">
              A student, <br />
              <span className="italic">building daily.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a second-year <span className="text-parchment">BCA student</span> at Indraprastha
              Engineering College with an eye for turning messy data into decisions. My workflow
              lives at the intersection of spreadsheets, SQL queries, and clean JavaScript.
            </p>
            <p>
              I care about <span className="text-parchment">craft</span> — a dashboard that reads
              like a magazine, a query that runs in milliseconds, a game loop that just feels
              right. If a project doesn't respect the person on the other end of the screen, it
              isn't finished.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="font-display text-4xl text-ember">89.6%</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  Class XII
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-ember">2028</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  Graduating
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-ember">02</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 md:py-40 max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-ember mb-4">
            § Toolkit
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light tracking-tighter">
            The <span className="italic">stack.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {SKILLS.map((s) => (
            <div key={s.group} className="bg-ink p-8 hover:bg-card transition-colors group">
              <div className="font-mono text-xs uppercase tracking-widest text-ember mb-6 group-hover:tracking-[0.3em] transition-all">
                {s.group}
              </div>
              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="font-display text-2xl leading-tight">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-ember mb-8">
            § Certifications
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTS.map((c) => (
              <div
                key={c.title}
                className="border border-border rounded-lg p-8 hover:border-ember transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl leading-tight mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-ember whitespace-nowrap">
                    {c.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-32 md:py-48 border-t border-border grain overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-ember opacity-20 blur-[180px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-ember mb-8">
            § Say Hello
          </div>
          <h2 className="font-display text-6xl md:text-9xl font-light tracking-tighter leading-none">
            Let's build <br />
            <span className="italic text-ember">something.</span>
          </h2>
          <a
            href="mailto:kunnurawat437@gmail.com"
            className="inline-block mt-16 font-display text-2xl md:text-4xl italic underline decoration-ember decoration-2 underline-offset-8 hover:text-ember transition-colors break-all"
          >
            kunnurawat437@gmail.com
          </a>

          <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-6 font-mono text-xs uppercase tracking-widest">
            <a
              href="https://linkedin.com/in/kunalrawatt09"
              target="_blank"
              rel="noreferrer"
              className="border border-border hover:border-ember hover:text-ember px-6 py-3 rounded-full transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="tel:+918800853321"
              className="border border-border hover:border-ember hover:text-ember px-6 py-3 rounded-full transition-colors"
            >
              +91 88008 53321
            </a>
            <a
              href="https://github.com/kunalrawatt09"
              target="_blank"
              rel="noreferrer"
              className="border border-border hover:border-ember hover:text-ember px-6 py-3 rounded-full transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>© 2026 Kunal Rawat</span>
        <span>Crafted with care · Sahibabad → the world</span>
      </footer>
    </div>
  );
}
