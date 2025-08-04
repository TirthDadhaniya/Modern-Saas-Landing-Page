"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  icon?: React.ReactNode
  loading?: boolean
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  loading = false,
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 rounded-lg text-center"

  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white",
    outline: "border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800 text-white",
    ghost: "hover:bg-slate-800/50 text-white",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      disabled={loading}
      {...props}
    >
      {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : icon}
      {children}
    </motion.button>
  )
}
