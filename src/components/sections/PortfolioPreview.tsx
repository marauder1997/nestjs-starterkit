"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import portfolio from "@/data/portfolio.json";

export default function PortfolioPreview() {
  const preview = portfolio.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            검증된 성공 사례
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            다양한 업종과 국가에서 실제로 성과를 만들어낸 프로젝트를 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {preview.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-2xl p-6 border border-gray-100 ${item.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.year}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <MapPin className="w-3 h-3" /> {item.country} · {item.industry}
              </div>
              <div className="bg-white/80 rounded-xl p-3 text-xs font-semibold text-green-700 border border-green-100">
                ✓ {item.result}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            전체 포트폴리오 보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
