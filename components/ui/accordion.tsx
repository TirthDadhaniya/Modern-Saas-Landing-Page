"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-200"
      >
        <span className="font-semibold text-lg text-white">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          <ChevronDown className="text-slate-400" size={24} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.3, ease: "easeInOut", delay: isOpen ? 0.1 : 0 },
        }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-6 pb-6 pt-2">
          <div className="text-slate-300 leading-relaxed">{children}</div>
        </div>
      </motion.div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{ title: string; content: React.ReactNode }>
  allowMultiple?: boolean
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export const AccordionTrigger = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

export const AccordionContent = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}
