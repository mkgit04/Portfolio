import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import depiImage from "../../assets/depi.png";
import ntiImage from "../../assets/nti.jpg";
import { useLanguage } from "@/contexts/language-context";

const createIndustryPreview = (label: string, startColor: string, endColor: string) => {
  const safeLabel = label.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200" fill="none">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" rx="20" fill="url(#g)"/>
      <circle cx="286" cy="34" r="28" fill="white" fill-opacity="0.14"/>
      <circle cx="34" cy="170" r="44" fill="white" fill-opacity="0.1"/>
      <rect x="22" y="22" width="276" height="156" rx="14" fill="#0F172A" fill-opacity="0.18" stroke="white" stroke-opacity="0.16"/>
      <text x="34" y="108" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="white">${safeLabel}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const ExperienceSection = () => {
  const { isArabic } = useLanguage();

  const experiences = [
    {
      role: isArabic ? "متدرب Flutter" : "Flutter Developer Intern",
      company: "DEPI (Digital Egypt Pioneers Initiative)",
      period: isArabic ? "نوفمبر 2025 - يوليو 2026" : "Nov 2025 - Jul 2026",
      industryPreview: depiImage,
      points: isArabic
        ? [
            "تطوير وصيانة تطبيقات موبايل متعددة المنصات باستخدام Flutter",
            "التعاون مع مصممي UI/UX لتنفيذ تصميمات دقيقة",
            "دمج REST APIs وخدمات Firebase لربط التطبيق بالـ backend",
            "المشاركة في مراجعات الكود وعمليات التطوير Agile",
          ]
        : [
            "Developed and maintained cross-platform mobile applications using Flutter",
            "Collaborated with UI/UX designers to implement pixel-perfect designs",
            "Integrated REST APIs and Firebase services for backend functionality",
            "Participated in code reviews and agile development processes",
          ],
    },
    {
      role: isArabic ? "متدرب Full Stack PHP" : "Full Stack PHP Developer Trainee",
      company: isArabic ? "المعهد القومي للاتصالات (NTI)" : "National Telecommunication Institute (NTI)",
      period: isArabic ? "يوليو 2025 - أغسطس 2025" : "Jul 2025 - Aug 2025",
      industryPreview: ntiImage,
      points: isArabic
        ? [
            "إكمال تدريب عملي في PHP وMySQL وLaravel وأساسيات الواجهة الأمامية لتطوير تطبيقات الويب",
            "بناء مشاريع فريق Full Stack تشمل المصادقة وعمليات CRUD ودمج RESTful APIs",
            "تقديم مشروع تخرج تدريبي موثق بشكل واضح والحصول على تقييم إيجابي من المدربين",
          ]
        : [
            "Completed practical training in PHP, MySQL, Laravel, and front-end fundamentals for web application development",
            "Built full stack team projects with authentication, CRUD modules, and RESTful API integration",
            "Delivered a capstone project with clear documentation and received positive mentor feedback",
          ],
    },
  ];

  return (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        title={isArabic ? "الخبرات العملية" : "Work Experience"}
        subtitle={isArabic ? "أماكن ساهمت فيها بمهاراتي" : "Where I've contributed my skills"}
      />

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-xl p-6 hover:glow-border transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 sm:w-20 aspect-[12/10] rounded-lg overflow-hidden border border-border/60 shrink-0">
                <img
                  src={exp.industryPreview}
                  alt={isArabic ? `صورة توضيحية ${exp.role}` : `${exp.role} industry preview`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-primary text-sm font-medium">{exp.company}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{exp.period}</p>
              </div>
            </div>
            <ul className="space-y-2 ml-1">
              {exp.points.map((point, pi) => (
                <li key={pi} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

};

export default ExperienceSection;
