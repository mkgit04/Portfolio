import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { FiCheck, FiZap, FiStar, FiShield, FiMessageSquare } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

const plans = [
  {
    icon: <FiZap />,
    name: { en: "Starter", ar: "الأساسية" },
    price: "$200–500",
    period: { en: "per project", ar: "لكل مشروع" },
    tagline: { en: "Perfect for simple apps & MVPs", ar: "مثالية للتطبيقات البسيطة ونسخ MVP" },
    features: [
      { en: "3–5 Screens Flutter app", ar: "تطبيق Flutter من 3 إلى 5 شاشات" },
      { en: "Basic UI implementation", ar: "تنفيذ واجهة مستخدم أساسية" },
      { en: "State management (setState)", ar: "إدارة الحالة باستخدام setState" },
      { en: "Clean architecture", ar: "هيكلة نظيفة للتطبيق" },
      { en: "1–2 weeks delivery", ar: "التسليم خلال 1 إلى 2 أسبوع" },
    ],
    cta: { en: "Get Started", ar: "ابدأ الآن" },
    highlighted: false,
  },
  {
    icon: <FiStar />,
    name: { en: "Professional", ar: "الاحترافية" },
    price: "$800–2,000",
    period: { en: "per project", ar: "لكل مشروع" },
    tagline: { en: "Ideal for full-featured mobile apps", ar: "مثالية للتطبيقات الكاملة المزايا" },
    features: [
      { en: "6–12 Screens Flutter app", ar: "تطبيق Flutter من 6 إلى 12 شاشة" },
      { en: "Clean Architecture + BLoC/Cubit", ar: "Clean Architecture مع BLoC/Cubit" },
      { en: "REST API integration", ar: "دمج REST API" },
      { en: "iOS & Android deployment", ar: "تجهيز ونشر iOS وAndroid" },
      { en: "4–6 weeks delivery", ar: "التسليم خلال 4 إلى 6 أسابيع" },
      { en: "3 revision rounds", ar: "3 جولات تعديل" },
      { en: "Performance optimization", ar: "تحسين الأداء" },
    ],
    cta: { en: "Most Popular", ar: "الأكثر طلباً" },
    highlighted: true,
  },
  {
    icon: <FiShield />,
    name: { en: "Ultimate", ar: "المتقدمة" },
    price: "$2,500+",
    period: { en: "per project", ar: "لكل مشروع" },
    tagline: { en: "For complex, scalable applications", ar: "للتطبيقات المعقدة والقابلة للتوسع" },
    features: [
      { en: "Full-scale Flutter application", ar: "تطبيق Flutter متكامل على نطاق واسع" },
      { en: "Advanced architecture design", ar: "تصميم معماري متقدم" },
      { en: "Custom backend integration", ar: "تكامل Backend مخصص" },
      { en: "Real-time features", ar: "مزايا لحظية (Real-time)" },
      { en: "Multi-platform (iOS, Android)", ar: "متعدد المنصات (iOS وAndroid)" },
      { en: "Ongoing maintenance & support", ar: "صيانة ودعم مستمران" },
      { en: "Unlimited revisions", ar: "تعديلات غير محدودة" },
      { en: "Priority support", ar: "دعم ذو أولوية" },
    ],
    cta: { en: "Contact Me", ar: "تواصل معي" },
    highlighted: false,
  },
  {
    icon: <FiMessageSquare />,
    name: { en: "Custom", ar: "مخصصة" },
    price: { en: "Let's Talk", ar: "دعنا نتحدث" },
    period: "",
    tagline: { en: "Have something unique in mind? Let's discuss", ar: "هل لديك فكرة خاصة؟ دعنا نناقشها" },
    features: [
      { en: "Fully customized scope & features", ar: "نطاق عمل ومزايا مخصصة بالكامل" },
      { en: "Flexible timeline & milestones", ar: "جدول زمني ومراحل مرنة" },
      { en: "Tailored tech stack", ar: "اختيار تقنيات مناسب لمشروعك" },
      { en: "Dedicated communication channel", ar: "قناة تواصل مخصصة" },
      { en: "Custom architecture & design", ar: "تصميم وهيكلة مخصصة" },
      { en: "Scalable & future-proof solutions", ar: "حلول قابلة للتوسع ومناسبة للمستقبل" },
      { en: "Pay as you go or fixed quote", ar: "الدفع حسب التنفيذ أو بسعر ثابت" },
    ],
    cta: { en: "Get in Touch", ar: "تواصل الآن" },
    highlighted: false,
  },
];

const PricingSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isArabic } = useLanguage();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      const el = document.getElementById("contact");
      if (el) {
        const offset = 72;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={isArabic ? "خطط الأسعار" : "Pricing Plans"}
          subtitle={isArabic ? "أسعار واضحة لكل مرحلة من مشروعك" : "Transparent pricing for every stage of your project"}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-2xl p-5 flex flex-col transition-shadow
                hover:shadow-2xl hover:shadow-primary/50
                ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30 z-10"
                    : "glass hover:glow-border"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background text-primary text-xs font-heading font-bold border border-primary shadow">
                  {isArabic ? "★ الأكثر طلباً" : "★ Most Popular"}
                </div>
              )}

              {/* Icon + Name */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5
                  ${plan.highlighted ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"}`}
              >
                {plan.icon}
              </div>

              <h3
                className={`font-heading text-xl font-bold mb-1 ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {isArabic ? plan.name.ar : plan.name.en}
              </h3>
              <p
                className={`text-sm mb-5 ${
                  plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {isArabic ? plan.tagline.ar : plan.tagline.en}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-heading text-3xl font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {typeof plan.price === "string" ? plan.price : isArabic ? plan.price.ar : plan.price.en}
                </span>
                <span
                  className={`text-sm ml-2 ${
                    plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {typeof plan.period === "string" ? plan.period : isArabic ? plan.period.ar : plan.period.en}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`w-full h-px mb-6 ${
                  plan.highlighted ? "bg-primary-foreground/20" : "bg-border"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm">
                    <FiCheck
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                      }
                    >
                      {isArabic ? feature.ar : feature.en}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/#contact"
                onClick={handleContactClick}
                className={`w-full py-3 rounded-xl font-heading font-semibold text-sm text-center transition-all
                  ${
                    plan.highlighted
                      ? "bg-background text-primary hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
              >
                {isArabic ? plan.cta.ar : plan.cta.en}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          {isArabic
            ? "الأسعار تقديرية. التكلفة النهائية تعتمد على تعقيد المشروع. "
            : "All prices are estimates. Final cost depends on project complexity. "}
          <a href="/#contact" onClick={handleContactClick} className="text-primary hover:underline font-medium">
            {isArabic ? "تواصل معي" : "Contact me"}
          </a>{" "}
          {isArabic ? "للحصول على استشارة مجانية." : "for a free consultation."}
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
