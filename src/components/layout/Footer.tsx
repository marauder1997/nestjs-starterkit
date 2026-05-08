import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import company from "@/data/company.json";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 브랜드 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">{company.name}</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {company.description}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{company.email}</span>
              </div>
            </div>
          </div>

          {/* 서비스 링크 */}
          <div>
            <h3 className="text-white font-semibold mb-4">서비스</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">해외시장 조사</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">현지 파트너 발굴</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">인증·규제 컨설팅</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">수출 마케팅</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">수출금융 지원</Link></li>
            </ul>
          </div>

          {/* 회사 링크 */}
          <div>
            <h3 className="text-white font-semibold mb-4">회사</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">포트폴리오</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>사업자등록번호: 123-45-67890</p>
        </div>
      </div>
    </footer>
  );
}
