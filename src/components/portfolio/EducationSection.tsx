import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiBookOpen } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

const EducationSection = () => {
  const { isArabic } = useLanguage();

  const education = [
    {
      degree: isArabic ? "بكالوريوس علوم الحاسب" : "Bachelor of Science in Computer Science",
      institution: isArabic ? "جامعة المنوفية" : "Monufia University",
      period: isArabic ? "2022 - 2026 (متوقع)" : "2022 - 2026 (Expected)",
      gpa: "3.12/4.0",
      gpaGrade: isArabic ? "جيد جداً (B+)" : "Very Good (B+)",
      description: isArabic
        ? "أركز على هندسة البرمجيات والخوارزميات وهياكل البيانات وتطوير تطبيقات الموبايل، مع الحفاظ على مستوى أكاديمي قوي بالتوازي مع تنفيذ مشاريع عملية."
        : "Focusing on software engineering, algorithms, data structures, and mobile development. Maintaining a strong academic record while building real-world projects.",
    },
  ];

  return (
  <section id="education" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        title={isArabic ? "التعليم" : "Education"}
        subtitle={isArabic ? "رحلتي الأكاديمية" : "My academic journey"}
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative md:pl-16 mb-8 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <FiBookOpen className="text-primary text-xl mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.degree}</h3>
                  <p className="text-primary text-sm font-medium">{item.institution}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.period}</p>
                  <p className="text-muted-foreground text-xs mt-1">{isArabic ? "المعدل:" : "GPA:"} {item.gpa} {item.gpaGrade}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

};

export default EducationSection;
