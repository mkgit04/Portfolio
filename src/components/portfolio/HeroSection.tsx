import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-transparent.png";

const codeSnippets = [
  { text: "flutter pub get", x: "8%", y: "10%", delay: 0 },
  { text: "class HomeScreen extends StatelessWidget", x: "62%", y: "12%", delay: 0.4 },
  { text: "BlocBuilder<AppCubit, AppState>", x: "80%", y: "85%", delay: 0.8 },
  { text: "await dio.get('/api/v1/user')", x: "5%", y: "85%", delay: 0.2 },
  { text: "CleanArchitecture()", x: "52%", y: "90%", delay: 1.0 },
];

const ROLES = {
  en: [
    "Flutter Developer",
    "Full Stack Developer",
    "Mobile App Engineer",
    "Clean Architecture Fan",
  ],
  ar: ["مطور فلاتر", "مطور فل ستاك", "مهندس تطبيقات موبايل", "مهتم بالـ Clean Architecture"],
};

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

const useTypewriterLoop = (words: string[]) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      // Finished typing — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && displayed === "") {
      // Finished deleting — pause then move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
    } else {
      // Type or delete one character
      timeout = setTimeout(
        () => {
          setDisplayed((prev) =>
            isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        },
        isDeleting ? DELETE_SPEED : TYPE_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
};

const HeroSection = () => {
  const { language, isArabic } = useLanguage();
  const rolePlayed = useTypewriterLoop(ROLES[language]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: snippet.delay + 1 },
            y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: snippet.delay },
          }}
          className="absolute hidden lg:block"
          style={{ left: snippet.x, top: snippet.y }}
        >
          <div
            dir="ltr"
            className="glass px-3 py-1.5 rounded-lg border border-primary/20 text-primary/60 font-mono text-xs whitespace-nowrap select-none text-left"
          >
            <span className="text-primary/40 mr-1.5">›</span>
            {snippet.text}
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Static name */}
              <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl font-bold text-foreground mb-4 leading-tight">
                {isArabic ? "مرحباً، أنا" : "Hi, I'm"}{" "}
                <span className="text-gradient">{isArabic ? "محمد خطاب" : "Mohammed Khattab"}</span>
              </h1>

              {/* Typewriter roles line */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-10">
                <span className="text-primary font-heading font-semibold text-xl md:text-2xl tracking-wide">
                  {rolePlayed}
                </span>
                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-[3px] h-7 rounded-sm bg-primary"
                />
              </div>

              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                {isArabic
                  ? "أتخصص في بناء تطبيقات موبايل نظيفة وقابلة للتوسع وموجهة لتجربة المستخدم باستخدام Flutter ومبادئ هندسة البرمجيات الحديثة."
                  : "I specialize in building clean, scalable, and user-focused mobile applications using Flutter and modern software architecture principles."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
              >
                {isArabic ? "عرض المشاريع" : "View Projects"}
              </a>
              <a
                href="/Mohammed_Khattab_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary text-primary font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FiDownload className="text-lg" />
                {isArabic ? "تحميل السيرة الذاتية" : "Download CV"}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5 mt-8"
            >
              {[
                { icon: <FiGithub />, href: "https://github.com/mkgit04" },
                { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/mohammed-mk-khattab" },
                { icon: <FiMail />, href: "mailto:mhmd.ahmd.khattab@gmail.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-xl transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo with coding-themed frame */}
          <motion.div
            initial={{ opacity: 0, scale: 1,  y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl scale-110 -z-10" />

            <div className="glass rounded-3xl border border-primary/30 overflow-hidden shadow-2xl w-72 md:w-80">
              {/* Editor top bar */}
              <div dir="ltr" className="bg-muted/80 px-4 py-2.5 flex items-center gap-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground tracking-wide">
                  mohammed_khattab.dart
                </span>
              </div>

              {/* Code above photo */}
              <div
                dir="ltr"
                className="bg-background/60 px-4 pt-3 pb-2 font-mono text-xs space-y-1 border-b border-border/50 text-left"
              >
                <div>
                  <span className="text-blue-400">class </span>
                  <span className="text-yellow-300">Developer </span>
                  <span className="text-muted-foreground">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">final </span>
                  <span className="text-green-400">String </span>
                  <span className="text-foreground/80">name = </span>
                  <span className="text-orange-300">'Mohammed'</span>
                  <span className="text-muted-foreground">;</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">final </span>
                  <span className="text-green-400">String </span>
                  <span className="text-foreground/80">stack = </span>
                  <span className="text-orange-300">'Flutter'</span>
                  <span className="text-muted-foreground">;</span>
                </div>
              </div>

              {/* Photo */}
              <div className="relative">
                <img
                
                  src={profilePhoto}
                  alt={isArabic ? "صورة محمد خطاب" : "Mohammed Khattab"}
                  className="w-full h-64 object-cover bg-background  object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Code below photo */}
              <div dir="ltr" className="bg-background/60 px-4 py-3 font-mono text-xs space-y-1 text-left">
                <div className="pl-4">
                  <span className="text-purple-400">@override</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">Widget </span>
                  <span className="text-yellow-300">build</span>
                  <span className="text-muted-foreground">() </span>
                  <span className="text-muted-foreground">{"=> "}</span>
                  <span className="text-green-400">AwesomeApp</span>
                  <span className="text-muted-foreground">();</span>
                </div>
                <div><span className="text-muted-foreground">{"}"}</span></div>
                <div className="pl-4 flex items-center">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-primary rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge: experience */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: [35, 40, 35] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.2 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-4 -left-6 glass px-4 py-2 rounded-xl border border-primary/30 shadow-lg"
            >
              <p className="font-heading text-xs text-muted-foreground">{isArabic ? "الخبرة" : "Experience"}</p>
              <p className="font-heading text-sm font-bold text-primary">{isArabic ? "تطوير Flutter" : "Flutter Development"}</p>
            </motion.div>

            {/* Floating badge: availability */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: 40 }}
              animate={{ opacity: 1, y: [-25, -20, -25] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.5 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-primary/30 shadow-lg"
            >
              <p className="font-heading text-xs text-muted-foreground">{isArabic ? "متاح لـ" : "Available for"}</p>
              <p className="font-heading text-sm font-bold text-primary">{isArabic ? "العمل الحر ✓" : "Freelance ✓"}</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
