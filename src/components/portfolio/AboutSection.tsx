import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiSmartphone, FiCode, FiCpu, FiDollarSign } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

// Import your photo — place your image at src/assets/profile.jpg (or .png)
import profilePhoto from "@/assets/second.png";

const AboutSection = () => {
  const { isArabic } = useLanguage();

  const highlights = [
    {
      icon: <FiSmartphone />,
      label: isArabic ? "تطبيقات الموبايل" : "Mobile Apps",
      value: "Flutter & Dart",
    },
    {
      icon: <FiCode />,
      label: isArabic ? "كود نظيف" : "Clean Code",
      value: isArabic ? "مبادئ SOLID" : "SOLID Principles",
    },
    {
      icon: <FiCpu />,
      label: isArabic ? "طالب علوم حاسب" : "CS Student",
      value: isArabic ? "التخرج 2026" : "Graduating 2026",
    },
  ];

  return (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        title={isArabic ? "نبذة عني" : "About Me"}
        subtitle={isArabic ? "تعرف عليّ أكثر وما الذي يحفزني" : "Get to know who I am and what drives me"}
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Photo + Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-6"
        >

          {/* Highlights */}
          <div className="grid gap-3 w-full">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:glow-border transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg shrink-0">
                  {h.icon}
                </div>
                <div>
                  <p className="text-foreground font-heading font-semibold text-sm">{h.label}</p>
                  <p className="text-muted-foreground text-xs">{h.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isArabic
              ? "أنا مطور Flutter وطالب في السنة الرابعة بكلية الحاسبات والمعلومات - جامعة المنوفية، وبدأ شغفي بتطوير تطبيقات الموبايل منذ عدة سنوات عندما بدأت تعلم البرمجة وبناء مشاريع بسيطة."
              : "I am a Flutter developer and a fourth-year Computer Science student at Monufia University with a strong passion for mobile application development that started several years ago when I began exploring programming and building simple projects."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isArabic
              ? "منذ ذلك الوقت، عملت على مشاريع أكاديمية وشخصية متعددة، تشمل تطبيقات موبايل وتطبيقات سطح مكتب بلغة Java وأنظمة ويب. هذه المشاريع منحتني خبرة عملية حقيقية في التطوير."
              : "Since then, I have worked on multiple academic and personal projects, including mobile applications, Java desktop applications, and web-based systems. In total, I have developed several practical projects that helped me gain real-world development experience."}

          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {isArabic
              ? "أتخصص في بناء تطبيقات موبايل عالية الأداء تعمل على أكثر من منصة باستخدام Flutter، مع اتباع مبادئ Clean Architecture واستخدام BLoC/Cubit لبناء كود قابل للتوسع وسهل الصيانة."
              : "I specialize in building high-performance cross-platform mobile applications using Flutter, following Clean Architecture principles and using BLoC/Cubit for scalable and maintainable code."}


          </p>
          {/* <pre className="text-muted-foreground leading-relaxed mb-8">
            My experience includes:
            <br />
            • Developing mobile applications using Flutter
            <br />
            • Implementing state management using BLoC/Cubit
            <br />
            • Integrating RESTful APIs
            <br />
            • Working with local databases such as SQLite
            <br />
            • Building responsive and modern UI
            <br />
            • Developing complete mobile applications from idea to deployment
            

          </pre> */}
          <p className="text-muted-foreground leading-relaxed mb-8">
            {isArabic
              ? "أركز على كتابة كود نظيف وقابل للصيانة وتقديم تطبيقات موثوقة تلبي متطلبات العميل."
              : "I focus on writing clean, maintainable code and delivering reliable applications that meet client requirements."}

          </p>


        </motion.div>
      </div>
    </div>
  </section>
);

};

export default AboutSection;
