import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/language-context";

const testimonials = [
  {
    name: "Mariam Hassan",
    role: { en: "Frontend Teammate", ar: "زميلة فرونت إند" },
    text: {
      en: "Working with Mohammed was smooth from day one. He breaks big tasks into clear steps and always keeps the team updated.",
      ar: "العمل مع محمد كان سلساً منذ اليوم الأول. يقسم المهام الكبيرة لخطوات واضحة ويُبقي الفريق على اطلاع دائم.",
    },
  },
  {
    name: "Ahmed Samy",
    role: { en: "Project Lead - Student Initiative", ar: "قائد مشروع - مبادرة طلابية" },
    text: {
      en: "Mohammed handled our portfolio sprint with strong ownership. He delivered before deadlines and helped teammates unblock quickly.",
      ar: "محمد أدار سباق تطوير مشروعنا بمسؤولية عالية. سلّم قبل المواعيد وساعد الفريق على تخطي العوائق بسرعة.",
    },
  },
  {
    name: "Nour El-Din",
    role: { en: "UI/UX Designer", ar: "مصمم UI/UX" },
    text: {
      en: "He translates design ideas into clean, responsive interfaces without losing visual details. Collaboration with him was very efficient.",
      ar: "يحول أفكار التصميم إلى واجهات نظيفة ومتجاوبة دون فقدان التفاصيل البصرية. التعاون معه كان فعالاً جداً.",
    },
  },
  {
    name: "Youssef Ali",
    role: { en: "Backend Developer", ar: "مطوّر Backend" },
    text: {
      en: "Mohammed communicates technical constraints clearly and suggests practical solutions. Integration between frontend and backend became much easier.",
      ar: "محمد يوضح القيود التقنية بوضوح ويقترح حلولاً عملية. التكامل بين الفرونت إند والباك إند أصبح أسهل بكثير.",
    },
  },
  {
    name: "Salma Ibrahim",
    role: { en: "Classmate - DEPI Track", ar: "زميلة دراسة - مسار DEPI" },
    text: {
      en: "He is dependable and detail-oriented. Even under pressure, he keeps code quality high and supports everyone around him.",
      ar: "يمكن الاعتماد عليه ويهتم بالتفاصيل. حتى تحت الضغط يحافظ على جودة الكود ويدعم من حوله.",
    },
  },
  {
    name: "Omar Khaled",
    role: { en: "Freelance Client", ar: "عميل عمل حر" },
    text: {
      en: "Mohammed delivered exactly what I asked for and added thoughtful improvements. The final result looked professional and loaded fast.",
      ar: "محمد نفّذ المطلوب بدقة وأضاف تحسينات ذكية. النتيجة النهائية كانت احترافية وسريعة التحميل.",
    },
  },
];

const loopedTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="testimonials" className="section-padding" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={isArabic ? "آراء العملاء" : "Testimonials"}
          subtitle={isArabic ? "ماذا يقول الآخرون عن العمل معي" : "What people say about working with me"}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            className="testimonials-track"
            style={isArabic ? { animationName: "testimonials-scroll-rtl" } : undefined}
          >
            {loopedTestimonials.map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                className={`glass rounded-xl p-6 relative shrink-0 w-[290px] sm:w-[340px] min-h-[210px] ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                <FiMessageCircle
                  className={`text-primary/20 text-4xl absolute top-4 ${isArabic ? "left-4" : "right-4"}`}
                />
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  "{isArabic ? t.text.ar : t.text.en}"
                </p>
                <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-heading font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{isArabic ? t.role.ar : t.role.en}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
