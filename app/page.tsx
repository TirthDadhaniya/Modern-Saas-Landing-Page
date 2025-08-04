"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Zap,
  Target,
  BarChart3,
  Brain,
  Rocket,
  Shield,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
  easeOut,
} from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { Modal } from "@/components/ui/modal";
import { ContactForm } from "@/components/contact-form";
import { PricingCalculator } from "@/components/pricing-calculator";
import { DashboardPreview } from "@/components/dashboard-preview";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

// Animated section wrapper
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Inc.",
      image: "/Sarah.jpg?height=60&width=60",
      quote:
        "ADmyBRAND AI Suite transformed our marketing ROI by 340%. The AI insights are incredibly accurate and actionable.",
    },
    {
      name: "Marcus Rodriguez",
      company: "GrowthLab",
      image: "/Marcus.jpg?height=60&width=60",
      quote:
        "The automation features saved us 20+ hours per week. Our campaigns now run themselves with better results than ever.",
    },
    {
      name: "Emily Watson",
      company: "StartupBoost",
      image: "/Emily.jpg?height=60&width=60",
      quote:
        "From zero to 10M impressions in 3 months. This platform is a game-changer for scaling marketing operations.",
    },
  ];

  const faqItems = [
    {
      title: "How does the AI-powered targeting work?",
      content:
        "Our AI analyzes over 500+ data points including user behavior, demographics, interests, and real-time market trends to identify your ideal customers and optimize ad targeting automatically.",
    },
    {
      title: "Can I integrate with my existing marketing tools?",
      content:
        "Yes! ADmyBRAND AI Suite integrates seamlessly with 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, and more through our robust API.",
    },
    {
      title: "What kind of ROI can I expect?",
      content:
        "Our customers typically see a 200-400% improvement in marketing ROI within the first 90 days, with some achieving even higher returns as the AI learns and optimizes their campaigns.",
    },
    {
      title: "Is there a free trial available?",
      content:
        "We offer a 14-day free trial with full access to all Pro features. No credit card required to get started.",
    },
    {
      title: "How quickly can I see results?",
      content:
        "Most users see initial improvements within 24-48 hours of setup. Significant performance gains typically occur within the first 2 weeks as our AI gathers and analyzes your campaign data.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden relative">
      {/* Unified flowing gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/15 to-indigo-900/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(120,119,198,0.15),_transparent_70%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_40%,_rgba(255,119,198,0.12),_transparent_70%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_40%_60%,_rgba(120,200,255,0.12),_transparent_70%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(147,51,234,0.1),_transparent_70%)] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.25),_transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-900/70 to-transparent pointer-events-none"></div>

        {/* Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center"
        >
          <span className="text-2xl font-bold text-white">ADmyBRAND</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-300 hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white">
              Pricing
            </a>
            <a href="#testimonials" className="text-slate-300 hover:text-white">
              Testimonials
            </a>
            <a href="#faq" className="text-slate-300 hover:text-white">
              FAQ
            </a>
          </div>
          <div className="hidden md:block">
            <Button onClick={() => setShowContactModal(true)}>
              Get Started
            </Button>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                AI-Powered Marketing
              </span>
              <br />
              <span className="text-white">That Actually Works</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your marketing with intelligent automation, predictive
              analytics, and AI-driven insights that deliver measurable results
              in days, not months.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                size="lg"
                icon={<ArrowRight size={20} />}
                onClick={() => setShowContactModal(true)}
              >
                Sign Up for Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Play size={20} />}
                onClick={() =>
                  document
                    .getElementById("dashboard-preview")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Hero Dashboard Preview */}
            <DashboardPreview />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Everything you need to dominate your market with AI-driven
                marketing automation
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Brain className="text-blue-400" size={32} />,
                title: "AI-Powered Insights",
                description:
                  "Get deep customer insights and predictive analytics that reveal hidden opportunities in your market.",
              },
              {
                icon: <Target className="text-purple-400" size={32} />,
                title: "Smart Targeting",
                description:
                  "Automatically identify and target your ideal customers with precision-based AI algorithms.",
              },
              {
                icon: <BarChart3 className="text-blue-400" size={32} />,
                title: "Real-Time Analytics",
                description:
                  "Monitor campaign performance with live dashboards and automated optimization recommendations.",
              },
              {
                icon: <Rocket className="text-purple-400" size={32} />,
                title: "Campaign Automation",
                description:
                  "Set up once and let AI manage your campaigns 24/7 for maximum ROI and efficiency.",
              },
              {
                icon: <Shield className="text-blue-400" size={32} />,
                title: "Brand Protection",
                description:
                  "Advanced monitoring and protection tools to safeguard your brand reputation across all channels.",
              },
              {
                icon: <Zap className="text-purple-400" size={32} />,
                title: "Lightning Fast Setup",
                description:
                  "Get up and running in minutes with our intuitive onboarding and smart campaign templates.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="p-6 h-full">
                  <CardContent className="p-0">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Calculate Your Perfect Plan
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Get a personalized quote based on your specific needs and scale
              </p>
            </div>
          </AnimatedSection>
          <PricingCalculator />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our
                core AI features.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                name: "Starter",
                price: "$49",
                popular: false,
                features: [
                  "Up to 10,000 contacts",
                  "Basic AI insights",
                  "Email automation",
                  "Standard support",
                  "Core integrations",
                ],
              },
              {
                name: "Pro",
                price: "$149",
                popular: true,
                features: [
                  "Up to 100,000 contacts",
                  "Advanced AI analytics",
                  "Multi-channel automation",
                  "Priority support",
                  "All integrations",
                  "Custom reporting",
                  "A/B testing suite",
                ],
              },
              {
                name: "Enterprise",
                price: "$399",
                popular: false,
                features: [
                  "Unlimited contacts",
                  "Full AI suite access",
                  "White-label options",
                  "Dedicated success manager",
                  "Custom integrations",
                  "Advanced security",
                  "SLA guarantee",
                ],
              },
            ].map((plan, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card
                  className={`p-8 h-full relative ${
                    plan.popular ? "ring-2 ring-purple-400/50" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-slate-400">/month</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <Check
                            className="text-green-400 flex-shrink-0"
                            size={20}
                          />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                      onClick={() => setShowContactModal(true)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  What Our Customers Say
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their
                marketing with ADmyBRAND AI Suite
              </p>
            </div>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 text-center">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current"
                          size={24}
                        />
                      ))}
                    </div>

                    <blockquote className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={
                          testimonials[currentTestimonial].image ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full border-2 border-slate-600"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-white text-lg">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-slate-400">
                          {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons - Fixed positioning */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 border border-slate-600 rounded-full p-3 transition-colors duration-200 hover:bg-slate-700 hover:border-slate-500 z-10"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 border border-slate-600 rounded-full p-3 transition-colors duration-200 hover:bg-slate-700 hover:border-slate-500 z-10"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial
                      ? "bg-purple-500"
                      : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Everything you need to know about ADmyBRAND AI Suite
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  ADmyBRAND
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Transforming marketing with AI-powered automation and insights
                that deliver real results.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2025 ADmyBRAND AI Suite. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-slate-400">📧 hello@admybrand.ai</span>
              <span className="text-slate-400">📞 +1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        title="Contact Us"
        size="lg"
      >
        <ContactForm />
      </Modal>
    </div>
  );
}
