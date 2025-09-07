import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials, sectionContent } from "../../data/content";
import type { Testimonial } from "../../types";
import BaseCard from '../ui/BaseCard';

const TestimonialsSection: React.FC = () => {
  const column1 = testimonials.slice(0, 2);
  const column2 = testimonials.slice(2, 4);
  const column3 = testimonials.slice(4, 6);

  return (
    <section className="section-padding bg-light-bg dark:bg-dark-bg overflow-hidden">
      <div className="max-container container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">{sectionContent.testimonials.title.line1}</span>
            <br />
            <span className="gradient-text dark:dark-gradient-text">
              {sectionContent.testimonials.title.line2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {sectionContent.testimonials.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto h-[700px] relative overflow-hidden">
          <TestimonialColumn testimonials={column1} speed={30} direction="up" />
          <TestimonialColumn
            testimonials={column2}
            speed={25}
            direction="down"
            className="hidden md:block"
          />
          <TestimonialColumn
            testimonials={column3}
            speed={35}
            direction="up"
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

interface TestimonialColumnProps {
  testimonials: Testimonial[];
  speed: number;
  direction: "up" | "down";
  className?: string;
}

const TestimonialColumn: React.FC<TestimonialColumnProps> = ({
  testimonials,
  speed,
  direction,
  className = "",
}) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<
    Testimonial[]
  >([]);
  const [isPaused, setIsPaused] = useState(false);
  const [y, setY] = useState(0);
  const animationFrame = useRef<number | undefined>(undefined);

  useEffect(() => {
    setDuplicatedTestimonials([
      ...testimonials,
      ...testimonials,
      ...testimonials,
    ]);
  }, [testimonials]);

  useEffect(() => {
    let lastTime = performance.now();
    const totalHeight = columnRef.current?.scrollHeight ?? 1;
    const directionFactor = direction === "up" ? -1 : 1;

    function animate(now: number) {
      if (!isPaused) {
        const delta = now - lastTime;
        lastTime = now;
        // speed: px/sec, so convert ms to sec
        setY((prevY) => {
          let nextY = prevY + directionFactor * (speed * (delta / 1000));
          // Loop seamlessly
          if (direction === "up" && nextY < -totalHeight / 3)
            nextY += totalHeight / 3;
          if (direction === "down" && nextY > 0) nextY -= totalHeight / 3;
          return nextY;
        });
      } else {
        lastTime = now;
      }
      animationFrame.current = requestAnimationFrame(animate);
    }
    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [isPaused, speed, direction, duplicatedTestimonials]);

  return (
    <div
      className={`relative h-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={columnRef}
        className="flex flex-col space-y-6 will-change-transform"
        style={{ transform: `translateY(${y}px)` }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
      {/* Subtle fade edges */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-light-bg dark:from-dark-bg to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-light-bg dark:from-dark-bg to-transparent pointer-events-none z-10" />
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <BaseCard
      variant="default"
      hoverEffect="glow"
      className="p-6 mb-6"
    >
      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Enhanced Author */}
      <div className="flex items-center space-x-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent p-0.5 relative"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <div className="w-full h-full rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center">
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </motion.div>
        <div>
          <motion.div
            className="font-bold text-gray-900 dark:text-white text-base"
            whileHover={{ color: "#00d4ff" }}
            transition={{ duration: 0.2 }}
          >
            {testimonial.name}
          </motion.div>
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default TestimonialsSection;
