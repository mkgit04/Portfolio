import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/language-context";

const footerSocials = [
  { icon: <FiGithub />, href: "https://github.com/mkgit04", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/mohammed-mk-khattab", label: "LinkedIn" },
  { icon: <FiMail />, href: "mailto:mhmd.ahmd.khattab@gmail.com", label: "Email" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isArabic } = useLanguage();
  const footerLinks = [
    { label: isArabic ? "عني" : "About", href: "#about" },
    { label: isArabic ? "المشاريع" : "Projects", href: "#projects" },
    { label: isArabic ? "الخدمات" : "Services", href: "#services" },
    { label: isArabic ? "تواصل" : "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const offset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    scrollToSection(sectionId);
  };

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <a
            href="/"
            onClick={handleHomeClick}
            className="font-heading text-xl font-bold text-gradient"
          >
            {isArabic ? "محمد خطاب" : "Mohammed Khattab"}
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleFooterLinkClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {footerSocials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {isArabic
              ? `© ${new Date().getFullYear()} محمد خطاب. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} Mohammed Khattab. All rights reserved.`}
          </p>
          <p className="text-muted-foreground text-xs">
            {isArabic ? "تم التطوير باستخدام" : "Built with"}{" "}
            <span className="text-primary">React</span> & <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
