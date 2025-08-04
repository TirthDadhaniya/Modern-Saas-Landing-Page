"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Users, Target, BarChart3, Activity, DollarSign, Eye, Zap } from "lucide-react"

export function DashboardPreview() {
  const [activeMetric, setActiveMetric] = useState(0)
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    conversions: 0,
    impressions: 0,
    engagement: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const targets = {
      revenue: 127500,
      conversions: 2847,
      impressions: 1250000,
      engagement: 8.7,
    }

    const animateValue = (key: keyof typeof targets, target: number) => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setAnimatedValues((prev) => ({ ...prev, [key]: current }))
      }, 30)
    }

    Object.entries(targets).forEach(([key, target]) => {
      animateValue(key as keyof typeof targets, target)
    })
  }, [])

  const formatNumber = (num: number, type: string) => {
    if (type === "currency") return `$${Math.round(num).toLocaleString()}`
    if (type === "percentage") return `${num.toFixed(1)}%`
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return Math.round(num).toString()
  }

  const metrics = [
    {
      icon: <DollarSign className="text-green-400" size={24} />,
      label: "Revenue",
      value: formatNumber(animatedValues.revenue, "currency"),
      change: "+23.5%",
      color: "green",
    },
    {
      icon: <Target className="text-blue-400" size={24} />,
      label: "Conversions",
      value: formatNumber(animatedValues.conversions, "number"),
      change: "+18.2%",
      color: "blue",
    },
    {
      icon: <Eye className="text-purple-400" size={24} />,
      label: "Impressions",
      value: formatNumber(animatedValues.impressions, "number"),
      change: "+45.1%",
      color: "purple",
    },
    {
      icon: <Activity className="text-orange-400" size={24} />,
      label: "Engagement",
      value: formatNumber(animatedValues.engagement, "percentage"),
      change: "+12.8%",
      color: "orange",
    },
  ]

  const chartData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 78 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 81 },
    { month: "May", value: 95 },
    { month: "Jun", value: 110 },
  ]

  return (
    <div id="dashboard-preview" className="max-w-6xl mx-auto">
      {/* Single Unified Dashboard Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
      >
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-8 border-b border-white/10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">AI Marketing Dashboard</h3>
          </div>
          <p className="text-slate-300 text-center text-lg">Real-time insights and automated optimization</p>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 ${
                  activeMetric === index ? "ring-2 ring-purple-500 bg-white/10" : "hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  {metric.icon}
                  <span
                    className={`text-sm font-semibold ${
                      metric.color === "green"
                        ? "text-green-400"
                        : metric.color === "blue"
                          ? "text-blue-400"
                          : metric.color === "purple"
                            ? "text-purple-400"
                            : "text-orange-400"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-slate-400 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance Chart */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-blue-400" size={24} />
                <h4 className="text-xl font-semibold text-white">Performance Trends</h4>
              </div>
              <div className="h-48 flex items-end justify-between gap-2">
                {chartData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${item.value}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg min-h-[20px] relative group"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.value}%
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-400">
                      {item.month}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-green-400" size={24} />
                <h4 className="text-xl font-semibold text-white">AI Insights</h4>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 font-semibold">Opportunity Detected</span>
                  </div>
                  <p className="text-slate-300 text-sm">Increase budget on Campaign #3 for 23% better ROI</p>
                </div>

                <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-400 font-semibold">Optimization Applied</span>
                  </div>
                  <p className="text-slate-300 text-sm">Audience targeting refined based on conversion data</p>
                </div>

                <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-400 font-semibold">Trend Alert</span>
                  </div>
                  <p className="text-slate-300 text-sm">Mobile engagement up 34% - consider mobile-first strategy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Status */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-purple-400" size={24} />
              <h4 className="text-xl font-semibold text-white">Active Campaigns</h4>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Summer Product Launch",
                  status: "Active",
                  performance: "Excellent",
                  budget: "$12,500",
                  spent: 68,
                },
                {
                  name: "Retargeting Campaign",
                  status: "Optimizing",
                  performance: "Good",
                  budget: "$8,200",
                  spent: 45,
                },
                { name: "Brand Awareness", status: "Active", performance: "Average", budget: "$15,000", spent: 82 },
              ].map((campaign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex-1">
                    <h5 className="font-semibold text-white">{campaign.name}</h5>
                    <div className="flex items-center gap-4 mt-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          campaign.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {campaign.status}
                      </span>
                      <span className="text-slate-400 text-sm">{campaign.performance}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">{campaign.budget}</div>
                    <div className="text-slate-400 text-sm">{campaign.spent}% spent</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
