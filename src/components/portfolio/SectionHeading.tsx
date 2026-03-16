import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
