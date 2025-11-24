import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Menu,
  X,
  Linkedin,
  Github,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

import AmitImage from "./assets/ProfileImages/AmitImage.jpg";
import AmitResume from "./assets/Resume/Amit-Resume.pdf";
import Swal from "sweetalert2";

import TextType from "./Components/TextType/TextType";

const ProfileImage = AmitImage;
const ResumePDF = AmitResume;

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Tailwind CSS",
  "HTML & CSS",
  "Responsive Design",
  "Git & GitHub",
  "Rest APIs",
];

const projects = [
  {
    title: "AutoPortal",
    desc: "Responsive multi-page app where users can list and search vehicles.",
    tech: ["React", "Tailwind", "Firebase"],
    demo: "#",
    repo: "https://github.com/Amit9737/AutoPortal",
  },
  {
    title: "Walmart Clone",
    desc: "Ecommerce-styled frontend demo focused on accessibility.",
    tech: ["React", "tailwindCSS", "Axios", "Styled Components"],
    demo: "#",
    repo: "https://github.com/Amit9737/Walmart-clone",
  },
  {
    title: "Dictionary App",
    desc: "Responsive Dictionary APP using public APIs.",
    tech: ["React", "Axios", "REST APIs"],
    demo: "https://amit9737.github.io/live-dictionary-app/",
    repo: "https://github.com/Amit9737/live-dictionary-app",
  },
  {
    title: "QrCode Generator",
    desc: "Simple Qr-Code generator using public APIs.",
    tech: ["React", "Axios", "REST APIs"],
    demo: "https://amit9737.github.io/Live-Qr-Generator/",
    repo: "https://github.com/Amit9737/Live-Qr-Generator",
  },
];

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nc5kjvl", "template_j2exs4o", form.current, {
        publicKey: "y1iUJzC0lEeJOnZxL",
      })
      .then(
        () => {
          Swal.fire("Good!", "Message Sent Successfully!", "success");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // 🔥 Smooth Scroll Function
  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 antialiased">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-2xl">
              <img
                src={ProfileImage}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">
                Amit Rathod
              </div>
              <div className="text-xs text-slate-400 -mt-1">
                <span>FrontEnd Developer</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <button
                key={n}
                onClick={() => scrollToSection(n)}
                className="text-sm hover:text-white/90 transition-colors cursor-pointer"
              >
                {n}
              </button>
            ))}

            <a
              href={ResumePDF}
              target="_blank"
              className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 shadow-sm text-sm"
            >
              <Download size={16} /> Resume
            </a>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 rounded-md hover:bg-white/5"
            >
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((n) => (
                <button
                  key={n}
                  onClick={() => {
                    scrollToSection(n);
                    setNavOpen(false);
                  }}
                  className="block text-left text-sm px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer"
                >
                  {n}
                </button>
              ))}

              <a
                href={ResumePDF}
                target="_blank"
                className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 shadow-sm text-sm w-max"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* All Sections Continue Below (No Change Made) */}
      {/* HERO, ABOUT, SKILLS, PROJECTS, CONTACT, FOOTER — unchanged */}
      {/* Your full component continues exactly as you wrote it */}

      {/* ---- PASTE ALL YOUR OTHER SECTIONS BELOW — THEY REMAIN UNCHANGED ---- */}

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section
          id="home"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-7">
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Amit Rathod
              <span className="text-indigo-400">
                <br></br>
                <TextType
                  text={[
                    "FrontEnd Developer !",
                    "React.Js Developer !"
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="mt-4 text-slate-300 max-w-xl"
            >
              Hi! I'm Amit — a fresher web developer building clean, accessible
              and animated React interfaces. I design small, interview-friendly
              projects that highlight skills recruiters look for: readability,
              responsive UI, and deployment-ready code.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 shadow-lg"
              >
                View Projects <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:bg-white/3"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-400">
              <a
                href="https://github.com/Amit9737"
                target="_blank"
                aria-label="github link"
                className="hover:text-white"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-rathod-9b236a267/"
                target="_blank"
                aria-label="linkedin link"
                className="hover:text-white"
              >
                <Linkedin />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/"
                target="_blank"
                aria-label="email link"
                className="hover:text-white"
              >
                <Mail />
              </a>
            </div>

            {/* Quick facts / recruiter friendly bullets */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-slate-800/60 p-4 rounded-lg">
                <div className="text-sm text-slate-400">Availability</div>
                <div className="font-medium">Immediate</div>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-lg">
                <div className="text-sm text-slate-400">Preferred Role</div>
                <div className="font-medium">Front-end Developer</div>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-lg">
                <div className="text-sm text-slate-400">Location</div>
                <div className="font-medium">Rajkot</div>
              </div>
            </div>
          </div>

          {/* 3D card/profile column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ rotateY: 10, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/30 border border-slate-700 shadow-2xl"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30" />

              <div className="relative bg-slate-900 p-6 rounded-xl flex flex-col items-center gap-4">
                <div className="w-36 h-36 rounded-full overflow-hidden transform-gpu hover:scale-105 transition-all duration-500 shadow-xl">
                  <img
                    src={ProfileImage}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center">
                  <div className="text-xl font-semibold">Amitbhai Rathod</div>
                  <div className="text-sm text-slate-400">
                    Fresher Front-end Developer
                  </div>
                </div>

                <div className="w-full mt-2">
                  <div className="text-xs text-slate-400">Top Skills</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {skills.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 bg-white/5 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full flex items-center gap-3 mt-4">
                  <a
                    href={ResumePDF}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-indigo-600"
                    target="_blank"
                  >
                    <Download size={16} /> Download Resume
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center px-3 py-2 rounded-md border border-slate-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            About Me
          </motion.h2>

          <motion.div
            className="mt-4 text-slate-300 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            I'm a fresher web developer focused on building responsive,
            accessible and animated user interfaces using modern tools like
            React and Tailwind CSS. I enjoy turning UI designs into
            production-ready components and learning new libraries to ship
            polished results.
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-12">
          <motion.h3 className="text-xl font-semibold">Skills</motion.h3>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {skills.map((s) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={s}
                className="p-3 bg-slate-800/50 rounded-lg text-sm text-center"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Projects</h3>
            <a
              href="#projects"
              className="text-sm text-indigo-400 hover:underline"
            >
              See all
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ translateY: -6 }}
                className="relative rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900/60 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{p.title}</div>
                    <div className="text-sm text-slate-400 mt-1">{p.desc}</div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 bg-white/5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-2">
                    <a
                      href={p.repo}
                      className="text-sm px-3 py-2 rounded-md border border-slate-700"
                    >
                      Repo
                    </a>
                    <a
                      href={p.demo}
                      className="text-sm px-3 py-2 rounded-md bg-indigo-600"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12">
          <h3 className="text-xl font-semibold">Contact</h3>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="grid grid-cols-1 gap-4"
                id="ContactForm"
              >
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700"
                  name="from_name"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700"
                  name="from_email"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700"
                  name="message"
                />

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    onClick={sendEmail}
                    className="px-4 py-2 rounded-lg bg-indigo-600"
                  >
                    Send Message
                  </button>
                  <button type="button" className="px-4 py-2 rounded-lg border">
                    Clear
                  </button>
                </div>
              </form>
            </div>

            <aside className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <div className="text-sm text-slate-400">Email</div>
              <div className="font-medium">rathodamit0645@gmail.com</div>

              <div className="mt-4 text-sm text-slate-400">Phone Number</div>
              <div className="font-medium">+91 70466 70143</div>

              <div className="mt-4 text-sm text-slate-400">Open to</div>
              <div className="font-medium">
                Internships · Junior Roles · Freelance
              </div>

              <div className="mt-6 flex items-center gap-3 text-slate-300">
                <a target="_blank" href="https://github.com/Amit9737">
                  {" "}
                  <Github />{" "}
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/amit-rathod-9b236a267/"
                >
                  {" "}
                  <Linkedin />{" "}
                </a>
                <a target="_blank" href="https://www.gmail.com">
                  {" "}
                  <Mail />{" "}
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 py-8 border-t border-slate-800/60 text-slate-400 text-sm">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <div>
              © {new Date().getFullYear()} Amitbhai Rathod. Built with React +
              Tailwind.
            </div>
            <div className="mt-3 md:mt-0">
              Designed for recruiters • One-page friendly
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
