"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glassmorphism?: boolean
}

export function Card({ children, className, hover = true, glassmorphism = true }: CardProps) {
  const baseClasses = "rounded-xl transition-all duration-300"
  const glassClasses = glassmorphism
    ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
    : "bg-slate-800 border border-slate-700"
  const hoverClasses = hover
    ? "hover:bg-white/15 hover:border-white/30 hover:transform hover:scale-105 hover:shadow-xl"
    : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(baseClasses, glassClasses, hoverClasses, className)}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>
}
