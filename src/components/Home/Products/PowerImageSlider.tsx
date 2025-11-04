"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/pages/banner/hiamps-power-backup-blue-battery.webp",
  "/images/pages/banner/hiamps-power-backup-solar-red-battery.webp",
  "/images/pages/banner/hiamps-power-backup-blue-battery.webp",
];

export default function PowerImageSlider({ inView }: { inView: boolean }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Move right to left
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      className="flex-1 justify-center relative w-full h-[600px] overflow-hidden "
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`Slider Image ${current + 1}`}
            fill
            className="object-contain rounded-2xl shadow-xl"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
