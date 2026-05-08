"use client";

import { useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import portfolio from "@/data/portfolio.json";

const categories = ["전체", "동남아시아", "유럽", "북미", "일본", "중동"];

export default function PortfolioPage() {
  const [active, setActive] = useState("전체");

  const filtered =
    active === "전체" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <div>
      {/* 히어로 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">포트폴리오</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            다양한 국가와 업종에서 성공한 해외진출 프로젝트를 소개합니다.
          </p>
        </div>
      </section>

      {/* 필터 + 그리드 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl p-6 border border-gray-100 ${item.color} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {item.year}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <MapPin className="w-3 h-3" />
                  {item.country} · {item.industry}
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-white/70 text-gray-600 text-xs px-2 py-1 rounded-full border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 성과 */}
                <div className="bg-white/80 rounded-xl p-3 text-xs font-semibold text-green-700 border border-green-100">
                  ✓ {item.result}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center text-gray-400 py-20">
              해당 카테고리의 프로젝트가 없습니다.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
