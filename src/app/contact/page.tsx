"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import company from "@/data/company.json";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 배포 시 API 연동 (Resend 등)
    console.log("문의 내용:", form);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {/* 히어로 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Contact</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">문의하기</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            해외진출에 대해 궁금한 점을 남겨주시면 전문 컨설턴트가 1-2일 내로 연락드립니다.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 연락처 정보 */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-6">연락처</h2>
              <div className="flex flex-col gap-6">
                {[
                  { icon: Phone, label: "전화", value: company.phone },
                  { icon: Mail, label: "이메일", value: company.email },
                  { icon: MapPin, label: "주소", value: company.address },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                      <div className="text-gray-700 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="text-sm font-bold text-blue-900 mb-2">상담 운영시간</h3>
                <p className="text-xs text-blue-700">평일 09:00 ~ 18:00</p>
                <p className="text-xs text-blue-700">점심 12:00 ~ 13:00 제외</p>
                <p className="text-xs text-blue-500 mt-1">주말·공휴일 휴무</p>
              </div>
            </div>

            {/* 문의 폼 */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">문의가 접수되었습니다</h3>
                  <p className="text-gray-500">1-2 영업일 내로 연락드리겠습니다. 감사합니다.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">무료 상담 신청</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        담당자명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="홍길동"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        회사명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="(주)회사명"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        이메일 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="example@company.kr"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        연락처
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      관심 서비스
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">선택해주세요</option>
                      <option value="market">해외시장 조사</option>
                      <option value="partner">현지 파트너 발굴</option>
                      <option value="cert">인증·규제 컨설팅</option>
                      <option value="marketing">수출 마케팅</option>
                      <option value="finance">수출금융 지원</option>
                      <option value="edu">글로벌 인재 교육</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      문의 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="해외진출 목표 국가, 업종, 현재 상황 등을 자유롭게 작성해 주세요."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> 문의 보내기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
