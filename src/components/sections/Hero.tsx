"use client";

import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import company from "@/data/company.json";

const stats = [
  { icon: Globe, label: "진출 국가", value: `${company.countries}개국` },
  { icon: TrendingUp, label: "지원 프로젝트", value: `${company.projects}건` },
  { icon: Users, label: "전문 인력", value: `${company.employees}명` },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/40 text-blue-200 text-sm px-4 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              창립 {company.founded}년 · 해외진출 전문기업
            </span>
          </motion.div>

          {/* 헤드라인 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {company.slogan.split(" ").slice(0, 3).join(" ")}
            <br />
            <span className="text-cyan-400">
              {company.slogan.split(" ").slice(3).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-200 mb-8 leading-relaxed"
          >
            {company.description}
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              무료 상담 신청 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 border border-blue-400/50 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800/50 transition-colors"
            >
              성공 사례 보기
            </Link>
          </motion.div>

          {/* 통계 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 border-t border-blue-700 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-blue-300">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-xs">{stat.label}</span>
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
