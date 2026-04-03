"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { SITE } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 227;

const currentFrame = (index: number) =>
  `/photos/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images
    const preloadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      preloadedImages.push(img);
    }
    setImages(preloadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !heroRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    if (images[0]) {
      const setDimensions = () => {
        canvas.width = images[0].naturalWidth;
        canvas.height = images[0].naturalHeight;
        context.drawImage(images[0], 0, 0);
      };
      
      if (images[0].complete) {
        setDimensions();
      } else {
        images[0].onload = setDimensions;
      }
    }

    const frameInfo = { frame: 0 };
    
    const render = () => {
      if (images[frameInfo.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[frameInfo.frame], 0, 0);
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=200%",
        scrub: 1.5,
        pin: true,
      }
    });

    tl.to(frameInfo, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    }, 0);

    tl.to(canvasRef.current, {
      scale: 1,
      filter: "brightness(1)",
      opacity: 1,
      y: 0,
      ease: "none",
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [images]);

  return (
    <section ref={heroRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover -z-10 hero-photo"
      />
      <div className="hero-photo-glow" />

      <div className="relative z-10 flex flex-col items-center text-center gap-12 w-full max-w-6xl px-6 pt-16">
        <div className="px-4 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
          >
            Hi, I&apos;m<br />
            <span style={{ color: '#00D6FF' }}>{SITE.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-[var(--text-b)] mb-8 max-w-lg"
          >
            {SITE.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="text-sm tracking-widest uppercase text-[var(--text-label)] mb-8"
          >
            [{SITE.role}]
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="flex items-center gap-6"
          >
            <a href="#projects" className="text-sm font-medium hover:text-white transition-colors">
              View Projects &rarr;
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-white transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute right-8 top-1/2 -translate-y-1/2 h-32 w-[1px] bg-white/10 hidden md:block">
        <motion.div 
          className="w-[3px] h-8 bg-white absolute top-0 -left-[1px] rounded-full"
          animate={{ y: [0, 96] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
