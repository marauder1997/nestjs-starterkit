"use client";

import Link from "next/link";
import { ArrowRight, Globe, Handshake, FileCheck, TrendingUp, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";
import services from "@/data/services.json";

// 아이콘 이름 → 컴포넌트 매핑
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Handshake, FileCheck, TrendingUp, DollarSign, Users,
};

export default function ServicesPreview() {
  // 홈에서는 상위 3개만 표시
  const preview = services.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            해외진출 전 과정을 함께합니다
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            시장 조사부터 현지 정착까지, 맞춤형 원스톱 솔루션을 제공합니다.
          </p>
        </div>

        {/* 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {preview.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="flex flex-col gap-1">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 bg-blue-400 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            전체 서비스 보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
