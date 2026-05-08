import { Globe, Users, TrendingUp, Award } from "lucide-react";
import company from "@/data/company.json";

const stats = [
  { icon: Globe, label: "진출 지원 국가", value: `${company.countries}개국` },
  { icon: TrendingUp, label: "성공 프로젝트", value: `${company.projects}건` },
  { icon: Users, label: "전문 인력", value: `${company.employees}명` },
  { icon: Award, label: "설립연도", value: `${company.founded}년` },
];

export default function AboutPage() {
  return (
    <div>
      {/* 히어로 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">회사소개</h1>
          <p className="text-gray-400 text-lg max-w-xl">{company.description}</p>
        </div>
      </section>

      {/* 통계 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-blue-500/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 미션/비전 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">미션</h2>
              <p className="text-gray-600 leading-relaxed">
                국내 중소기업이 세계 시장에서 공정하게 경쟁할 수 있도록, 전문적인 해외진출 지원 서비스를 통해 글로벌 성장의 기회를 제공합니다.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">비전</h2>
              <p className="text-gray-600 leading-relaxed">
                2030년까지 국내 중소기업 1,000개사의 해외진출을 성공적으로 지원하여, 대한민국 중소기업의 글로벌 경쟁력을 높이는 선도 기업이 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">회사 연혁</h2>
          <div className="relative">
            {/* 타임라인 선 */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-blue-200" />
            <div className="flex flex-col gap-8">
              {company.history.map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-32 shrink-0 text-right">
                    <span className="text-blue-600 font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[calc(1rem+1px)] top-2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white" />
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex-1">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
