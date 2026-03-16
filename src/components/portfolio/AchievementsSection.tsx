import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

import ntiCertificate from "../../certificates/nti-certificate.pdf";
import edraakCertificate from "../../certificates/edraak-certificate.pdf";
import cubitCertificate from "../../certificates/udemy-cubit-certificate.pdf";
import udemyImage from "../../assets/udemy.png";
import ntiImage from "../../assets/nti.jpg";
import edraakImage from "../../assets/edraak.png";

const achievements = [
  {
    industryPreview: udemyImage,
    title: { en: "Advanced Flutter Certificate", ar: "شهادة Flutter المتقدمة" },
    description: {
      en: "Successfully completed Advanced Flutter MVVM and BloC/ Cubit Course in Udemy with a score of 100%.",
      ar: "إتمام دورة Flutter المتقدمة (MVVM وBLoC/Cubit) على Udemy بنسبة 100%.",
    },
    certificateUrl: cubitCertificate,
    certificateFilename: "udemy-cubit-certificate.pdf",
  },
   {
    industryPreview: ntiImage,
    title: { en: "NTI Graduate", ar: "خريج تدريب NTI" },
    description: {
      en: "Successfully completed the National Training Institute (NTI) Full Stack with PHP summer training program with a focus on web development and Laravel development with score: 99%.",
      ar: "إتمام برنامج التدريب الصيفي Full Stack with PHP في المعهد القومي للاتصالات NTI مع التركيز على تطوير الويب وLaravel بنسبة 99%.",
    },
    certificateUrl: ntiCertificate,
    certificateFilename: "nti-certificate.pdf",
  },

  {
    industryPreview: edraakImage,
    title: { en: "EDRAAK Certificate", ar: "شهادة إدراك" },
    description: {
      en: "Successfully completed Arab Open University (AOU) EDRAAK Course with a score of 100%.",
      ar: "إتمام دورة إدراك التابعة للجامعة العربية المفتوحة بنسبة 100%.",
    },
    certificateUrl: edraakCertificate,
    certificateFilename: "edraak-certificate.pdf",
  },
];

const AchievementsSection = () => {
  const { isArabic } = useLanguage();

  return (
  <section id="achievements" className="section-padding bg-secondary/30">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title={isArabic ? "الإنجازات" : "Achievements"}
        subtitle={isArabic ? "محطات أفتخر بها" : "Milestones I'm proud of"}
      />

      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-xl p-6 text-center group hover:glow-border transition-shadow relative"
          >
            {a.certificateUrl && (
              <a
                href={a.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                title={isArabic ? "عرض الشهادة" : "View Certificate"}
              >
                <FiExternalLink className="text-base" />
              </a>
            )}
            <div className="mx-auto mb-4 w-full max-w-[220px] aspect-[16/10] rounded-lg overflow-hidden border border-border/60">
              <img
                src={a.industryPreview}
                alt={isArabic ? `معاينة ${a.title.ar}` : `${a.title.en} industry preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{isArabic ? a.title.ar : a.title.en}</h3>
            <p className="text-muted-foreground text-sm">{isArabic ? a.description.ar : a.description.en}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

};

export default AchievementsSection;
