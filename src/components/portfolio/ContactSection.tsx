import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiCheck } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

const socials = [
  { icon: <FiGithub />, href: "https://github.com/mkgit04", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/mohammed-mk-khattab", label: "LinkedIn" },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { isArabic } = useLanguage();

  const contactInfo = [
    {
      icon: <FiMail />,
      label: isArabic ? "البريد الإلكتروني" : "Email",
      value: "mhmd.ahmd.khattab@gmail.com",
      href: "mailto:mhmd.ahmd.khattab@gmail.com",
    },
    {
      icon: <FiPhone />,
      label: isArabic ? "الهاتف" : "Phone",
      value: "+20 155 608 5261",
      href: "tel:+201556085261",
    },
    {
      icon: <FiMapPin />,
      label: isArabic ? "الموقع" : "Location",
      value: isArabic ? "القاهرة، مصر" : "Cairo, Egypt",
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
  <section id="contact" className="section-padding bg-secondary/30">
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        title={isArabic ? "تواصل معي" : "Get in Touch"}
        subtitle={isArabic ? "دعنا نعمل معاً على شيء مميز" : "Let's work together on something great"}
      />

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{isArabic ? "معلومات التواصل" : "Contact Information"}</h3>
          <div className="space-y-4 mb-8">
            {contactInfo.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm text-foreground">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <h4 className="font-heading text-sm font-semibold text-foreground mb-3">{isArabic ? "تابعني" : "Follow Me"}</h4>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-6 space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Web3Forms access key — replace with your own from https://web3forms.com */}
          <input type="hidden" name="access_key" value="f1ba49e4-eb08-421d-aad7-42b969737bb5" />
          <input type="hidden" name="subject" value={isArabic ? "رسالة جديدة من معرض الأعمال" : "New message from portfolio"} />
          {/* Honeypot for spam prevention */}
          <input type="checkbox" name="botcheck" className="hidden" />

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl">
                <FiCheck />
              </div>
              <p className="font-heading font-semibold text-foreground">{isArabic ? "تم إرسال الرسالة" : "Message sent!"}</p>
              <p className="text-muted-foreground text-sm">{isArabic ? "سأعود إليك قريباً." : "I'll get back to you soon."}</p>
            </div>
          ) : (
            <>
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">{isArabic ? "الاسم" : "Name"}</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              placeholder={isArabic ? "اكتب اسمك" : "Your name"}
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">{isArabic ? "البريد الإلكتروني" : "Email"}</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              placeholder={isArabic ? "your@email.com" : "your@email.com"}
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">{isArabic ? "الرسالة" : "Message"}</label>
            <textarea
              rows={4}
              name="message"
              required
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
              placeholder={isArabic ? "احكِ لي عن مشروعك..." : "Tell me about your project..."}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {submitting ? (isArabic ? "جاري الإرسال..." : "Sending...") : isArabic ? "إرسال الرسالة" : "Send Message"}
          </button>
            </>
          )}
        </motion.form>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
