import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import company from "@/data/company.json";

export default function CtaBanner() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          해외진출을 고민하고 계신가요?
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
          전문 컨설턴트와 무료 상담으로 귀사에 맞는 최적의 해외진출 전략을 수립해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            무료 상담 신청 <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${company.phone}`}
            className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4" /> {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
