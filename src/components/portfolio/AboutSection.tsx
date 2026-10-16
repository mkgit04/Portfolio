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
      label: isArabic ? "خريج علوم حاسب" : "CS Graduate",
      value: isArabic ? "سنة التخرج 2026" : "Graduation Year 2026",
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
                ? "أنا مطور Flutter وقد أنهيت امتحانات السنة الرابعة بكلية الحاسبات والمعلومات بجامعة المنوفية. أمتلك شغفًا بتطوير تطبيقات الموبايل وبناء حلول برمجية عملية."
                : "I am a Flutter Developer who has completed fourth-year exams at the Faculty of Computers and Information, Monufia University, with a strong passion for mobile development and building practical software solutions."}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {isArabic
                ? "لدي خبرة عملية من خلال مشاريع متنوعة تشمل تطبيقات الموبايل وسطح المكتب والويب، مع التركيز على Flutter وDart وClean Architecture وBLoC/Cubit."
                : "I have gained hands-on experience through diverse mobile, desktop, and web projects, specializing in Flutter, Dart, Clean Architecture, and BLoC/Cubit."}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {isArabic
                ? "أهتم بكتابة كود نظيف وقابل للصيانة، والتكامل مع REST APIs وFirebase، وبناء تطبيقات موثوقة وقابلة للتوسع توفر تجربة استخدام مميزة."
                : "I focus on writing clean, maintainable code, integrating REST APIs and Firebase, and building reliable, scalable applications that deliver excellent user experiences."}
            </p>


          </motion.div>
        </div>
      </div>
    </section>
  );

};

export default AboutSection;
