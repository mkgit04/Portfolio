import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import rotaPreview from "../../assets/rota.png";
import { useLanguage } from "@/contexts/language-context";
import rotaVid from "../../assets/videos/rotaVid.mp4";

type Project = {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  tags: string[];
  github?: string | null;
  tryLink?: string | null;
  preview: string;
  previewVideo?: string;
};

const createPreviewImage = (
  title: string,
  tags: string[],
  startColor: string,
  endColor: string,
  badge: string,
) => {
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeBadge = badge.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeTags = tags
    .slice(0, 3)
    .join(" • ")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="720" rx="36" fill="url(#bg)"/>
      <circle cx="1040" cy="120" r="160" fill="white" fill-opacity="0.08"/>
      <circle cx="140" cy="620" r="180" fill="white" fill-opacity="0.06"/>
      <rect x="72" y="72" width="1056" height="576" rx="28" fill="#0F172A" fill-opacity="0.22" stroke="white" stroke-opacity="0.14"/>
      <rect x="112" y="118" width="220" height="46" rx="23" fill="white" fill-opacity="0.14"/>
      <text x="222" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="white">${safeBadge}</text>
      <text x="112" y="250" font-family="Arial, sans-serif" font-size="56" font-weight="700" fill="white">${safeTitle}</text>
      <text x="112" y="304" font-family="Arial, sans-serif" font-size="24" font-weight="500" fill="rgba(255,255,255,0.82)">${safeTags}</text>
      <rect x="112" y="378" width="976" height="8" rx="4" fill="white" fill-opacity="0.12"/>
      <rect x="112" y="438" width="290" height="148" rx="20" fill="white" fill-opacity="0.12"/>
      <rect x="434" y="438" width="290" height="148" rx="20" fill="white" fill-opacity="0.09"/>
      <rect x="756" y="438" width="332" height="148" rx="20" fill="white" fill-opacity="0.16"/>
      <rect x="138" y="470" width="140" height="14" rx="7" fill="white" fill-opacity="0.48"/>
      <rect x="138" y="504" width="220" height="10" rx="5" fill="white" fill-opacity="0.22"/>
      <rect x="460" y="470" width="188" height="14" rx="7" fill="white" fill-opacity="0.4"/>
      <rect x="460" y="504" width="198" height="10" rx="5" fill="white" fill-opacity="0.18"/>
      <rect x="782" y="470" width="182" height="14" rx="7" fill="white" fill-opacity="0.52"/>
      <rect x="782" y="504" width="244" height="10" rx="5" fill="white" fill-opacity="0.22"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const projects: Project[] = [
  {
    title: { en: "Carpooling App", ar: "تطبيق مشاركة الرحلات" },
    description: {
      en: "A full-featured carpooling app with user profiles, ride matching, real-time tracking, and payment integration.",
      ar: "تطبيق متكامل لمشاركة الرحلات يشمل ملفات المستخدمين ومطابقة الرحلات والتتبع اللحظي وتكامل الدفع.",
    },
    tags: ["Flutter", "REST API", "Cubit", "Clean Architecture", "DIO", "Shared Preferences", "Intl"],
    // github: "https://github.com/mkgit04",
    preview: createPreviewImage("Carpooling App", ["Flutter", "REST API", "Cubit"], "#2563EB", "#0F172A", "Mobility"),
  },
  {
    title: { en: "Metro Guide App", ar: "تطبيق دليل المترو" },
    description: {
      en: "A metro guide app with route planning, station information, and offline maps for quick navigation.",
      ar: "تطبيق دليل مترو يتضمن تخطيط المسارات ومعلومات المحطات وخرائط بدون إنترنت للتنقل السريع.",
    },
    tags: ["Flutter", "MVVM", "Cubit", "Easy Localization", "Shared Preferences"],
    // github: "https://github.com/mkgit04",
    preview: rotaPreview,
    previewVideo: rotaVid,
    tryLink: "https://apkpure.com/p/com.mk.rota",
    // createPreviewImage("Metro Guide App", ["Flutter", "MVVM", "Localization"], "#0F766E", "#164E63", "Transit"),
  },
  {
    title: { en: "Student Management System", ar: "نظام إدارة الطلاب" },
    description: {
      en: "A student management system with features for attendance tracking and grade management.",
      ar: "نظام لإدارة الطلاب يتضمن متابعة الحضور وإدارة الدرجات.",
    },
    tags: ["Flutter", "Firebase", "StreamBuilder"],
    github: "https://github.com/mkgit04",
    preview: createPreviewImage("Student Management", ["Flutter", "Firebase", "Reports"], "#7C3AED", "#312E81", "Education"),
  },
  {
    title: { en: "E-commerce App", ar: "تطبيق تجارة إلكترونية" },
    description: {
      en: "A responsive e-commerce app with product listings and user authentication.",
      ar: "تطبيق تجارة إلكترونية متجاوب مع عرض المنتجات ونظام تسجيل المستخدمين.",
    },
    tags: ["Flutter", "Navigator", "Mock Data", "GridView"],
    github: "https://github.com/mkgit04",
    preview: createPreviewImage("E-commerce App", ["Flutter", "Catalog", "Auth"], "#DB2777", "#4C1D95", "Commerce"),
  },
  {
    title: { en: "Loan Benefit Calculator", ar: "حاسبة فوائد القروض" },
    description: {
      en: "A responsive loan benefit calculator with interest rate calculations and amortization schedules.",
      ar: "حاسبة فوائد قروض متجاوبة لحساب نسب الفائدة وجدولة السداد.",
    },
    tags: ["Flutter", "setState", "Responsive UI Design"],
    github: "https://github.com/mkgit04",
    preview: createPreviewImage("Loan Calculator", ["Flutter", "Finance", "Responsive"], "#CA8A04", "#78350F", "Finance"),
  },
  {
    title: { en: "Todo List App", ar: "تطبيق قائمة المهام" },
    description: {
      en: "A responsive todo list app with task management and local storage persistence.",
      ar: "تطبيق قائمة مهام متجاوب لإدارة المهام مع حفظ البيانات محلياً.",
    },
    tags: ["Flutter", "setState", "Shared Preferences"],
    github: "https://github.com/mkgit04",
    preview: createPreviewImage("Todo List App", ["Flutter", "Tasks", "Storage"], "#059669", "#064E3B", "Productivity"),
  },
  {
    title: { en: "Students Data Management System", ar: "نظام إدارة بيانات الطلاب" },
    description: {
      en: "The system provides an intuitive interface for teachers to input and manage student information, ensuring efficient data handling and accurate grade reporting for educational institutions.",
      ar: "يوفر النظام واجهة سهلة للمعلمين لإدخال وإدارة بيانات الطلاب مع ضمان كفاءة التعامل مع البيانات ودقة تقارير الدرجات للمؤسسات التعليمية.",
    },
    tags: ["Java", "Java Swing", "MySQL", "phpMyAdmin"],
    github: "https://github.com/mkgit04",
    preview: createPreviewImage("Students Data System", ["Java", "MySQL", "Desktop"], "#EA580C", "#7C2D12", "Desktop"),
  },
];

type ProjectPreviewProps = {
  project: Project;
  isArabic: boolean;
};

const ProjectPreview = ({ project, isArabic }: ProjectPreviewProps) => {
  const [showImageFallback, setShowImageFallback] = useState(!project.previewVideo);

  if (showImageFallback) {
    return (
      <img
        src={project.preview}
        alt={isArabic ? `معاينة ${project.title.ar}` : `${project.title.en} preview`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <video
      src={project.previewVideo}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={project.preview}
      onError={() => setShowImageFallback(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      aria-label={isArabic ? `معاينة فيديو ${project.title.ar}` : `${project.title.en} video preview`}
    />
  );
};

const ProjectsSection = () => {
  const { isArabic } = useLanguage();

  return (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title={isArabic ? "المشاريع" : "Projects"}
        subtitle={isArabic ? "بعض أعمالي الأخيرة" : "Some of my recent work"}
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-xl overflow-hidden hover:glow-border transition-shadow group"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border/60 bg-muted/20">
              <ProjectPreview project={p} isArabic={isArabic} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
            </div>
            <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {isArabic ? p.title.ar : p.title.en}
              </h3>
              <div className="flex items-center gap-2">
                {p.tryLink && (
                  <a
                    href={p.tryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={isArabic ? `تجربة ${p.title.ar}` : `Try ${p.title.en}`}
                  >
                    <FiExternalLink />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={isArabic ? `مستودع ${p.title.ar}` : `${p.title.en} repository`}
                  >
                    <FiGithub />
                  </a>
                )}
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{isArabic ? p.description.ar : p.description.en}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

};

export default ProjectsSection;
