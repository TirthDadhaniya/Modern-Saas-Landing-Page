"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent } from "./ui/card"

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle size={32} className="text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-slate-300">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-slate-300">
            Ready to transform your marketing? Let's discuss how ADmyBRAND AI Suite can help your business grow.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="John Doe"
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="john@company.com"
            />
          </div>

          <Input
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
            placeholder="Your Company Name"
          />

          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Tell us about your marketing goals and how we can help..."
            rows={5}
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            icon={<Send size={20} />}
            className="w-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
