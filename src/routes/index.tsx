import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/portrait.jpg";
import analyticsImg from "@/assets/project-analytics.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kunal Rawat — Data Analyst & Developer" },
      {
        name: "description",
        content: "The portfolio of Kunal Rawat, a data analyst and developer creating clear dashboards, structured systems, and useful digital experiences.",
      },
      { property: "og:title", content: "Kunal Rawat — Data Analyst & Developer" },
      {
        property: "og:description",
        content: "Selected analytics and development work by Kunal Rawat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { group: "Data Analytics", items: ["Microsoft Excel", "Power BI", "SQL", "NumPy", "Pandas"] },
  { group: "Programming", items: ["C", "Java", "JavaScript", "Python"] },
  { group: "Core Concepts", items: ["DBMS", "OOP", "Data Structures"] },
  { group: "Tools & Platforms", items: ["Git", "GitHub"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript"] },
];

const PROJECTS = [
  {
    n: "01",
    title: "E-commerce Analytics Dashboard",
    type: "Power BI / MySQL / Python",
    year: "2026",
    image: ecommerceImg,
    body: "A four-page dashboard built to make a large e-commerce dataset easier to read. I cleaned the raw Kaggle data with NumPy and Pandas, kept only delivered orders, and stored the result in MySQL for reliable order lookup.",
    note: "The interface uses persistent page navigation, so every report stays one click away without vertical scrolling.",
    link: "https://drive.google.com/file/d/1IZjrPsFGg-vbjTkEMoGWQxMAgwxlSO2C/view?usp=sharing",
  },
  {
    n: "02",
    title: "Student Result Management System",
    type: "Power BI / SQL / Excel",
    year: "2026",
    image: analyticsImg,
    body: "An interactive reporting system for understanding subject performance, pass and fail rates, and wider cohort trends. Excel-cleaned data moves through a structured SQL backend into a focused Power BI dashboard.",
    note: "Built around one priority: preserving data integrity from source to final insight.",
    link: "https://drive.google.com/file/d/1Rj9ZhmMsurNuP6huEmqBFfTDpwLWrF7b/view?usp=sharing",
  },
];

const CERTS = [
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB · Credly",
    date: "Jul 2026",
    link: "https://www.credly.com/badges/35f08e91-22c7-4d1e-9108-3aac1bfc3b15/public_url",
  },
  {
    title: "Gemini Certified Student",
    issuer: "Google for Education",
    date: "May 2026 — May 2029",
    link: "https://edu.google.accredible.com/b5bd6f68-1583-4593-a672-06635aaed7f1#acc.xmvoi39R",
  },
  {
    title: "Excellence in HTML, CSS & JS",
    issuer: "thingQbator · NASSCOM Foundation & Cisco CSR",
    date: "Jul 2026",
    link: "https://thingqbator.nasscomfoundation.org/home/certificate/IcwKPMADVe05WPwL",
  },
];

function IndiaTime() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span>{time} IST</span>;
}

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-foreground/20 bg-background/95 backdrop-blur-sm">
        <div className="page-grid h-16 items-center">
          <a href="#top" className="col-span-5 font-display text-xl font-semibold md:col-span-3">
            Kunal Rawat
          </a>
          <nav aria-label="Primary navigation" className="hidden md:col-span-6 md:flex md:justify-center md:gap-8">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>
          <a href="#contact" className="col-span-3 justify-self-end border-b border-foreground pb-0.5 text-xs font-semibold uppercase md:col-span-3">
            Start a conversation
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="page-grid min-h-[calc(100svh-4rem)] content-between py-8 md:py-10">
          <div className="col-span-8 flex items-start justify-between border-t border-foreground pt-3 text-xs uppercase md:col-span-12">
            <span>Portfolio / 2026</span>
            <span className="hidden sm:block">Sahibabad, India · <IndiaTime /></span>
          </div>

          <div className="col-span-8 my-14 md:col-span-12 md:my-8">
            <p className="mb-5 text-sm font-semibold uppercase text-primary">Data analyst & developer</p>
            <h1 className="font-display text-[clamp(4.5rem,14vw,12rem)] font-semibold leading-[0.76]">
              Kunal<br /><span className="ml-[12vw] font-normal italic">Rawat</span>
            </h1>
          </div>

          <div className="col-span-8 grid grid-cols-8 gap-x-4 border-t border-foreground py-6 md:col-span-12 md:grid-cols-12 md:gap-x-6">
            <p className="col-span-8 max-w-2xl text-xl leading-snug md:col-span-5 md:text-2xl">
              I turn raw data into clear decisions—and build digital experiences that make those decisions easy to understand.
            </p>
            <div className="col-span-8 mt-8 grid grid-cols-2 gap-6 text-sm md:col-span-4 md:col-start-9 md:mt-0">
              <div>
                <p className="meta-label">Currently</p>
                <p>BCA student<br />Class of 2028</p>
              </div>
              <div>
                <p className="meta-label">Open to</p>
                <p>Internships<br />Collaborations</p>
              </div>
            </div>
          </div>

          <figure className="col-span-8 relative h-[32vh] min-h-56 overflow-hidden border border-foreground md:col-span-12 md:h-[38vh]">
            <img src={heroImg} alt="Kunal Rawat, data analyst and developer" loading="lazy" width={1264} height={722} className="h-full w-full object-cover object-[76%_top]" />
          </figure>
        </section>

        <section id="work" className="border-t border-foreground py-20 md:py-32">
          <div className="page-grid">
            <div className="col-span-8 mb-16 flex items-start justify-between md:col-span-12 md:mb-24">
              <div>
                <p className="section-kicker">01 / Selected work</p>
                <h2 className="section-title">Case studies</h2>
              </div>
              <span className="text-sm">Two projects</span>
            </div>

            <div className="col-span-8 space-y-24 md:col-span-12 md:space-y-36">
              {PROJECTS.map((project, index) => (
                <article key={project.n} className="grid grid-cols-8 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-x-6">
                  <div className={`col-span-8 md:col-span-7 ${index % 2 ? "md:col-start-6" : ""}`}>
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="project-image block border border-foreground">
                      <img src={project.image} alt={`${project.title} dashboard preview`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    </a>
                  </div>
                  <div className={`col-span-8 md:col-span-4 md:self-end ${index % 2 ? "md:col-start-1 md:row-start-1" : "md:col-start-9"}`}>
                    <div className="mb-5 flex justify-between border-b border-foreground pb-2 text-xs uppercase">
                      <span>Project {project.n}</span><span>{project.year}</span>
                    </div>
                    <h3 className="font-display text-4xl leading-none md:text-5xl">{project.title}</h3>
                    <p className="my-5 text-xs font-semibold uppercase text-primary">{project.type}</p>
                    <p className="leading-relaxed text-muted-foreground">{project.body}</p>
                    <p className="mt-4 border-l-2 border-primary pl-4 text-sm italic">{project.note}</p>
                    <a href={project.link} target="_blank" rel="noreferrer" className="arrow-link mt-8 inline-flex">View project <span aria-hidden>↗</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-foreground bg-foreground py-20 text-background md:py-32">
          <div className="page-grid">
            <p className="col-span-8 section-kicker text-primary md:col-span-3">02 / About</p>
            <div className="col-span-8 md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
                Curious by nature.<br /><span className="font-normal italic">Precise by practice.</span>
              </h2>
              <div className="mt-12 grid gap-8 border-t border-background/30 pt-8 md:grid-cols-2">
                <p className="text-lg leading-relaxed">I’m a second-year BCA student at Indraprastha Engineering College with an eye for turning messy information into useful decisions.</p>
                <p className="leading-relaxed text-background/70">My work sits between spreadsheets, SQL queries, dashboards, and the web. I care about the small choices that make a result feel obvious: naming, hierarchy, speed, and clarity.</p>
              </div>
              <dl className="mt-16 grid grid-cols-3 border-y border-background/30 py-8">
                <div><dt className="stat-value">89.6%</dt><dd className="stat-label">Class XII</dd></div>
                <div><dt className="stat-value">2028</dt><dd className="stat-label">Graduating</dd></div>
                <div><dt className="stat-value">03</dt><dd className="stat-label">Certificates</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-foreground py-20 md:py-32">
          <div className="page-grid">
            <div className="col-span-8 mb-16 md:col-span-4">
              <p className="section-kicker">03 / Capabilities</p>
              <h2 className="section-title">Working set</h2>
            </div>
            <div className="col-span-8 md:col-span-7 md:col-start-6">
              {SKILLS.map((skill, index) => (
                <div key={skill.group} className="grid grid-cols-[2rem_1fr] gap-4 border-t border-foreground py-5 md:grid-cols-[3rem_12rem_1fr]">
                  <span className="text-xs text-primary">0{index + 1}</span>
                  <h3 className="font-semibold md:text-lg">{skill.group}</h3>
                  <p className="col-start-2 text-muted-foreground md:col-start-3">{skill.items.join(" · ")}</p>
                </div>
              ))}
            </div>

            <div className="col-span-8 mt-28 md:col-span-12">
              <div className="mb-8 flex items-end justify-between">
                <div><p className="section-kicker">04 / Credentials</p><h2 className="section-title">Verified learning</h2></div>
                <span className="hidden text-sm md:block">Open a credential to verify</span>
              </div>
              <div className="border-t border-foreground">
                {CERTS.map((cert, index) => (
                  <a key={cert.title} href={cert.link} target="_blank" rel="noreferrer" className="certificate-row group">
                    <span className="text-xs text-primary">0{index + 1}</span>
                    <div><h3 className="font-display text-2xl md:text-3xl">{cert.title}</h3><p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p></div>
                    <span className="text-sm">{cert.date}</span>
                    <span className="text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-foreground py-20 md:py-28">
          <div className="page-grid">
            <p className="col-span-8 section-kicker md:col-span-3">05 / Contact</p>
            <div className="col-span-8 md:col-span-9 md:col-start-4">
              <p className="mb-4 text-sm">Have a useful problem to solve?</p>
              <a href="mailto:kunnurawat437@gmail.com" className="contact-link font-display text-[clamp(2.7rem,7vw,7rem)] leading-none">Let’s talk <span aria-hidden>↗</span></a>
              <div className="mt-16 flex flex-col gap-4 border-t border-foreground pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
                <a href="mailto:kunnurawat437@gmail.com" className="hover:text-primary">kunnurawat437@gmail.com</a>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/kunalrawatt09" target="_blank" rel="noreferrer" className="arrow-link">LinkedIn ↗</a>
                  <a href="https://github.com/kunalrawatt09" target="_blank" rel="noreferrer" className="arrow-link">GitHub ↗</a>
                  <a href="tel:+918800853321" className="arrow-link">Phone ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-grid border-t border-foreground py-5 text-xs uppercase">
        <span className="col-span-4">© 2026 Kunal Rawat</span>
        <span className="col-span-4 text-right md:col-span-8">Designed with intent in Sahibabad</span>
      </footer>
    </div>
  );
}