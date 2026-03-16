import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { SiFlutter, SiDart, SiFirebase, SiGit, SiFigma, SiPython, SiJavascript, SiTypescript, SiReact, SiSqlite, SiApifox, SiGithub, SiPostman, SiGooglesheets, SiMysql, SiPhp, SiPhpmyadmin, SiLaravel, SiBootstrap, SiC, SiCplusplus, SiStatuspage, SiBlockbench, SiMclaren, SiServerfault } from "react-icons/si";
import { FiAlignCenter, FiAlignJustify, FiArchive, FiCloudLightning, FiServer, FiUsers, FiMessageCircle, FiClock, FiTrendingUp, FiTarget, FiRefreshCw, FiZap, FiHeart, FiCode } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "BLoC, Cubit", icon: <FiCloudLightning /> },
      { name: "Clean Architecture", icon: <FiAlignJustify /> },
      { name: "MVVM Pattern", icon: <FiAlignCenter /> },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "REST APIs", icon: <FiServer /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "PhpMyAdmin", icon: <SiPhpmyadmin /> },
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Microsoft Office", icon: <SiGooglesheets /> },
      { name: "Windows & Basic Linux", icon: <FiArchive /> },
    ],
  },
];

const softSkills = [
  { name: "Teamwork", icon: <FiUsers /> },
  { name: "Communication", icon: <FiMessageCircle /> },
  { name: "Time Management", icon: <FiClock /> },
  { name: "Problem Solving", icon: <FiTarget /> },
  { name: "Adaptability", icon: <FiRefreshCw /> },
  { name: "Leadership", icon: <FiTrendingUp /> },
  { name: "Critical Thinking", icon: <FiZap /> },
  { name: "Work Ethic", icon: <FiHeart /> },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical");
  const { isArabic } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={isArabic ? "المهارات" : "Skills"}
          subtitle={isArabic ? "التقنيات والأدوات التي أعمل بها" : "Technologies and tools I work with"}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-border/60 bg-card/60 p-1.5 backdrop-blur-xl">
            <div className="relative grid grid-cols-2 gap-1">
              {[
                { id: "technical", label: isArabic ? "المهارات التقنية" : "Technical Skills", icon: <FiCode /> },
                { id: "soft", label: isArabic ? "المهارات الشخصية" : "Soft Skills", icon: <FiUsers /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "technical" | "soft")}
                  className="relative z-10 h-12 rounded-xl px-4 text-sm font-semibold transition-colors focus-visible:outline-none"
                  type="button"
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="skills-switch-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/90 to-cyan-400/90 shadow-[0_0_24px_-8px_hsl(var(--primary)/0.85)]"
                      transition={{ type: "spring", bounce: 0.28, duration: 0.6 }}
                    />
                  )}
                  <span
                    className={`relative flex items-center justify-center gap-2 ${
                      activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <span className="text-base">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "technical" ? (
            <motion.div
              key="technical-skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-8"
            >
              {skillCategories.map((cat, ci) => (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: ci * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-5">
                    {isArabic
                      ? {
                          "Mobile Development": "تطوير الموبايل",
                          "Backend & Database": "الواجهة الخلفية وقواعد البيانات",
                          "Languages & Frameworks": "اللغات والأطر",
                          "Tools & Others": "الأدوات وأخرى",
                        }[cat.title] ?? cat.title
                      : cat.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {cat.skills.map((skill, si) => (
                      <div
                        key={si}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors group"
                      >
                        <span className="text-primary text-lg group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="text-sm text-secondary-foreground">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="soft-skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-2 px-3 py-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors group"
                >
                  <span className="text-primary text-lg group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-sm text-secondary-foreground">
                    {isArabic
                      ? {
                          Teamwork: "العمل الجماعي",
                          Communication: "التواصل",
                          "Time Management": "إدارة الوقت",
                          "Problem Solving": "حل المشكلات",
                          Adaptability: "المرونة",
                          Leadership: "القيادة",
                          "Critical Thinking": "التفكير النقدي",
                          "Work Ethic": "أخلاقيات العمل",
                        }[skill.name] ?? skill.name
                      : skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
