
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiSmartphone,
  FiLayers,
  FiZap,
  FiCode,
  FiGlobe,
  FiServer,
  FiTool,
  FiArrowUpRight,
  FiDollarSign,
  FiCheckCircle,
} from "react-icons/fi";

import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/language-context";

const services = [
  {
    id: "mobile",
    icon: FiSmartphone,
    title: {
      en: "Mobile App Development",
      ar: "تطوير تطبيقات الموبايل",
    },
    description: {
      en: "Modern cross-platform applications built with Flutter, delivering responsive interfaces and consistent experiences on Android and iOS.",
      ar: "تطوير تطبيقات حديثة باستخدام Flutter، بواجهات متجاوبة وتجربة استخدام متناسقة على Android وiOS.",
    },
    technologies: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    id: "architecture",
    icon: FiLayers,
    title: {
      en: "Clean Architecture",
      ar: "الهندسة المعمارية النظيفة",
    },
    description: {
      en: "Well-structured, modular codebases designed for maintainability, scalability, and easier testing as your project grows.",
      ar: "بنية برمجية منظمة وقابلة للتوسع والصيانة والاختبار مع نمو مشروعك.",
    },
    technologies: ["Clean Architecture", "MVVM", "SOLID"],
  },
  {
    id: "performance",
    icon: FiZap,
    title: {
      en: "Debugging & Optimization",
      ar: "تصحيح الأخطاء وتحسين الأداء",
    },
    description: {
      en: "Find and fix bugs, reduce unnecessary rebuilds, and improve application responsiveness for a smoother user experience.",
      ar: "اكتشاف الأخطاء وإصلاحها وتقليل عمليات إعادة البناء غير الضرورية لتحسين سرعة التطبيق وسلاسة الاستخدام.",
    },
    technologies: ["Dart", "DevTools", "Profiling"],
  },
  {
    id: "state",
    icon: FiCode,
    title: {
      en: "State Management",
      ar: "إدارة حالة التطبيق",
    },
    description: {
      en: "Predictable and maintainable state management that keeps application logic organized and user interfaces reactive.",
      ar: "إدارة حالة منظمة وقابلة للصيانة تفصل منطق التطبيق عن الواجهة وتحافظ على استجابتها.",
    },
    technologies: ["BLoC", "Cubit", "Provider", "GetX"],
  },
  {
    id: "web",
    icon: FiGlobe,
    title: {
      en: "Web Development",
      ar: "تطوير تطبيقات الويب",
    },
    description: {
      en: "Responsive websites and web applications built to present your business professionally and deliver practical functionality.",
      ar: "إنشاء مواقع وتطبيقات ويب متجاوبة تعرض نشاطك التجاري باحترافية وتقدم وظائف عملية.",
    },
    technologies: ["PHP", "Laravel", "JavaScript"],
  },
  {
    id: "integration",
    icon: FiServer,
    title: {
      en: "API & Backend Integration",
      ar: "التكامل مع APIs والأنظمة الخلفية",
    },
    description: {
      en: "Connect your application to REST APIs, Firebase, authentication systems, databases, and cloud services.",
      ar: "ربط تطبيقك بواجهات REST APIs وFirebase وأنظمة تسجيل الدخول وقواعد البيانات والخدمات السحابية.",
    },
    technologies: ["REST APIs", "Firebase", "Dio"],
  },
  {
    id: "maintenance",
    icon: FiTool,
    title: {
      en: "Maintenance & Support",
      ar: "صيانة التطبيقات والدعم الفني",
    },
    description: {
      en: "Keep your application reliable with bug fixes, dependency updates, performance improvements, and new features.",
      ar: "الحفاظ على استقرار تطبيقك من خلال إصلاح الأخطاء وتحديث الحزم وتحسين الأداء وإضافة ميزات جديدة.",
    },
    technologies: ["Flutter", "Git", "Firebase"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

const ServicesSection = () => {
  const { isArabic } = useLanguage();

  return (
    <section
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-secondary/20 py-20 sm:py-24"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title={isArabic ? "خدماتي" : "My Services"}
          subtitle={
            isArabic
              ? "حلول برمجية عملية لتحويل فكرتك إلى منتج رقمي"
              : "Practical software solutions to turn your ideas into digital products"
          }
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
              >
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30">
                    <Icon className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-muted-foreground/60">
                    {String(
                      services.findIndex((item) => item.id === service.id) + 1
                    ).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold leading-snug text-foreground">
                  {isArabic ? service.title.ar : service.title.en}
                </h3>

                <p className="flex-1 text-sm leading-7 text-muted-foreground">
                  {isArabic
                    ? service.description.ar
                    : service.description.en}
                </p>

                <div className="my-5 h-px w-full bg-border/70" />

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border/70 bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Pricing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-start">
            <div className="flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
                <FiDollarSign className="text-2xl" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {isArabic
                    ? "لديك مشروع في ذهنك؟"
                    : "Have a project in mind?"}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  {isArabic
                    ? "استكشف خطط الأسعار واختر الحل المناسب لاحتياجات مشروعك وميزانيتك."
                    : "Explore the pricing plans and find the right solution for your project and budget."}
                </p>
              </div>
            </div>

            <Link
              to="/pricing"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <FiDollarSign className="text-lg" />
              {isArabic ? "عرض خطط الأسعار" : "View Pricing Plans"}
              <FiArrowUpRight
                className={`text-lg ${isArabic ? "-rotate-90" : ""}`}
              />
            </Link>
          </div>
        </motion.div>

        {/* Reassurance */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <FiCheckCircle className="text-primary" />
            {isArabic ? "كود منظم وقابل للصيانة" : "Maintainable code"}
          </span>

          <span className="flex items-center gap-2">
            <FiCheckCircle className="text-primary" />
            {isArabic ? "تصميم متجاوب" : "Responsive design"}
          </span>

          <span className="flex items-center gap-2">
            <FiCheckCircle className="text-primary" />
            {isArabic ? "اهتمام بالتفاصيل" : "Attention to detail"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
