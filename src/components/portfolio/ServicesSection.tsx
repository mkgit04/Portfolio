import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { FiSmartphone, FiLayout, FiTool, FiCloud, FiSearch, FiPaperclip, FiCloudDrizzle, FiCloudSnow, FiCloudLightning, FiServer, FiList, FiAlignJustify, FiRepeat, FiAlertTriangle, FiCode, FiDollarSign } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

const services = [
  {
    icon: <FiSmartphone />,
    title: { en: "Mobile App Development", ar: "تطوير تطبيقات الموبايل" },
    description: {
      en: "Cross-platform mobile apps built with Flutter for iOS and Android with native performance and beautiful UI.",
      ar: "تطوير تطبيقات موبايل متعددة المنصات باستخدام Flutter لأنظمة iOS وAndroid بأداء قوي وواجهة جذابة.",
    },
    technologies: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    icon: <FiAlignJustify />,
    title: { en: "Clean Architecture Implementation", ar: "تطبيق Clean Architecture" },
    description: {
      en: "Structuring code with clean architecture principles for maintainability, scalability, and testability in Flutter projects.",
      ar: "تنظيم الكود وفق مبادئ Clean Architecture لضمان سهولة الصيانة والتوسع والاختبار في مشاريع Flutter.",
    },
    technologies: ["Flutter", "Dart", "MVVM", "Clean Architecture"],
  },
  {
    icon: <FiCloudLightning />,
    title: { en: "Debugging & Performance Optimization", ar: "تصحيح الأخطاء وتحسين الأداء" },
    description: {
      en: "Identifying and resolving issues, optimizing code for better performance, and ensuring smooth user experiences.",
      ar: "اكتشاف المشكلات وحلها وتحسين الكود للحصول على أداء أفضل وتجربة استخدام أكثر سلاسة.",
    },
    technologies: ["Flutter DevTools", "Dart", "Profiling"],
  },
  {
    icon: <FiCode />,
    title: { en: "State Management Solutions", ar: "حلول إدارة الحالة" },
    description: {
      en: "Implementing state management using Bloc to manage app state efficiently and maintainably.",
      ar: "تطبيق إدارة الحالة باستخدام BLoC/Cubit لإدارة حالة التطبيق بكفاءة وسهولة صيانة.",
    },
    technologies: ["BLoC", "Cubit", "Provider", "Dart"],
  },
  {
    icon: <FiCloud />,
    title: { en: "Web App Development", ar: "تطوير تطبيقات الويب" },
    description: {
      en: "Responsive web applications using PHP, Laravel and modern JavaScript frameworks for dynamic user experiences.",
      ar: "تطوير تطبيقات ويب متجاوبة باستخدام PHP وLaravel وتقنيات JavaScript الحديثة لتجارب تفاعلية.",
    },
    technologies: ["PHP", "Laravel", "JavaScript", "Bootstrap"],
  },
  {
    icon: <FiServer />,
    title: { en: "Backend Integration", ar: "تكامل مع الواجهة الخلفية" },
    description: {
      en: "Seamless integration with Firebase, REST APIs, and cloud services for full-featured applications.",
      ar: "تكامل سلس مع Firebase وREST APIs والخدمات السحابية لبناء تطبيقات كاملة المزايا.",
    },
    technologies: ["Firebase", "REST APIs", "MySQL", "Postman"],
  },
  {
    icon: <FiTool />,
    title: { en: "App Maintenance", ar: "صيانة التطبيقات" },
    description: {
      en: "Ongoing support, bug fixes, performance optimization, and feature updates for existing applications.",
      ar: "دعم مستمر وإصلاح الأخطاء وتحسين الأداء وتحديث الميزات للتطبيقات الحالية.",
    },
    technologies: ["Git", "GitHub", "Flutter", "Firebase"],
  },
];

const ServicesSection = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={isArabic ? "الخدمات" : "Services"}
          subtitle={isArabic ? "ما الذي يمكنني تقديمه لك" : "What I can do for you"}
        />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-xl p-6 text-center hover:glow-border transition-shadow group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {s.icon}
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{isArabic ? s.title.ar : s.title.en}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{isArabic ? s.description.ar : s.description.en}</p>
            <div className="flex flex-wrap justify-center gap-1.5 mt-3">
              {s.technologies.map((tech, ti) => (
                <span
                  key={ti}
                  className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        ))}
      </div>
      {/* Pricing CTA Button */}
      <motion.div
      
      key={0}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=" rounded-xl p-6 text-center transition-shadow group"

      >

      <Link
        to="/pricing"
        className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-lg border border-primary text-primary font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <FiDollarSign className="text-lg" />
        {isArabic ? "عرض خطط الأسعار" : "View Pricing Plans"}
      </Link>
        </motion.div>
      </div>
    </section>
  );

};

export default ServicesSection;
