import { Globe, Handshake, FileCheck, TrendingUp, DollarSign, Users } from "lucide-react";
import services from "@/data/services.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Handshake, FileCheck, TrendingUp, DollarSign, Users,
};

export default function ServicesPage() {
  return (
    <div>
      {/* 히어로 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Services</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">서비스</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            해외진출의 모든 단계를 전문적으로 지원합니다. 시장조사부터 현지 정착까지 함께합니다.
          </p>
        </div>
      </section>

      {/* 서비스 그리드 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Globe;
              return (
                <div
                  key={service.id}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 프로세스 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">진행 프로세스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "초기 상담", desc: "기업 현황 파악 및 해외진출 목표 설정" },
              { step: "02", title: "전략 수립", desc: "타겟 시장 분석 및 맞춤 진출 전략 도출" },
              { step: "03", title: "실행 지원", desc: "파트너 발굴, 인증, 마케팅 통합 실행" },
              { step: "04", title: "사후 관리", desc: "현지 정착 및 지속 성장 모니터링" },
            ].map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-black text-blue-100 mb-3">{p.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
