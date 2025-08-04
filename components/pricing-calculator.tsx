"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, Users, Mail, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Slider } from "./ui/slider"
import { Button } from "./ui/button"

export function PricingCalculator() {
  const [contacts, setContacts] = useState(10000)
  const [emails, setEmails] = useState(50000)
  const [features, setFeatures] = useState(["basic"])
  const [calculatedPrice, setCalculatedPrice] = useState(49)

  useEffect(() => {
    let basePrice = 49

    // Contact-based pricing
    if (contacts > 50000) basePrice = 399
    else if (contacts > 25000) basePrice = 149

    // Email volume adjustment
    const emailMultiplier = Math.max(1, emails / 50000)
    basePrice *= emailMultiplier

    // Feature additions
    if (features.includes("advanced")) basePrice *= 1.5
    if (features.includes("enterprise")) basePrice *= 2

    setCalculatedPrice(Math.round(basePrice))
  }, [contacts, emails, features])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toString()
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator size={32} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">Pricing Calculator</h3>
          <p className="text-slate-300">Customize your plan based on your specific needs</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-blue-400" size={24} />
                <span className="text-white font-semibold">Number of Contacts</span>
              </div>
              <Slider value={contacts} onChange={setContacts} min={1000} max={100000} step={1000} />
              <div className="flex justify-between text-sm text-slate-400 mt-2">
                <span>1K</span>
                <span className="font-semibold text-white">{formatNumber(contacts)} contacts</span>
                <span>100K+</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-purple-400" size={24} />
                <span className="text-white font-semibold">Monthly Email Volume</span>
              </div>
              <Slider value={emails} onChange={setEmails} min={10000} max={500000} step={10000} />
              <div className="flex justify-between text-sm text-slate-400 mt-2">
                <span>10K</span>
                <span className="font-semibold text-white">{formatNumber(emails)} emails</span>
                <span>500K+</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-blue-400" size={24} />
                <span className="text-white font-semibold">Feature Level</span>
              </div>
              <div className="space-y-3">
                {[
                  { id: "basic", label: "Basic AI Features", price: "+$0" },
                  { id: "advanced", label: "Advanced Analytics", price: "+50%" },
                  { id: "enterprise", label: "Enterprise Suite", price: "+100%" },
                ].map((feature) => (
                  <label key={feature.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="features"
                      value={feature.id}
                      checked={features.includes(feature.id)}
                      onChange={(e) => setFeatures([e.target.value])}
                      className="w-4 h-4 text-purple-600 bg-transparent border-2 border-slate-600 focus:ring-purple-500"
                    />
                    <span className="text-white">{feature.label}</span>
                    <span className="text-slate-400 text-sm ml-auto">{feature.price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl p-8 border border-white/20">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Your Custom Plan</h4>
                <div className="text-5xl font-bold text-white mb-4">
                  ${calculatedPrice}
                  <span className="text-lg text-slate-400">/month</span>
                </div>

                <div className="space-y-3 mb-6 text-left">
                  <div className="flex justify-between text-slate-300">
                    <span>Contacts:</span>
                    <span className="text-white">{formatNumber(contacts)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Monthly Emails:</span>
                    <span className="text-white">{formatNumber(emails)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Feature Level:</span>
                    <span className="text-white capitalize">{features[0]}</span>
                  </div>
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Start Free Trial
                </Button>

                <p className="text-sm text-slate-400 mt-3">14-day free trial • No credit card required</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
            >
              <p className="text-green-400 text-sm text-center">💡 Save up to 30% with annual billing</p>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
