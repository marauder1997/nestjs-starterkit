# 중소기업 해외진출 홈페이지 Starter Kit

Next.js 16 + Tailwind CSS v4 + shadcn/ui 기반 템플릿 복제형 스타터킷입니다.

## 빠른 시작

```bash
# 1. 저장소 클론
git clone https://github.com/[YOUR_USERNAME]/claude-nextjs-starterkit.git
cd claude-nextjs-starterkit

# 2. 환경변수 설정
cp .env.example .env.local

# 3. 패키지 설치
pnpm install

# 4. 개발 서버 실행
pnpm dev
```

브라우저에서 http://localhost:3000 열기

## 커스터마이징 방법

**코드 없이 내용 수정:** `src/data/` 폴더의 JSON 파일만 편집

| 파일 | 수정 내용 |
|------|----------|
| `src/data/company.json` | 회사명, 슬로건, 연락처, 연혁 |
| `src/data/services.json` | 서비스 항목 |
| `src/data/portfolio.json` | 포트폴리오 프로젝트 |

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui
- **Animation**: Framer Motion 12
- **Deployment**: Vercel

## Vercel 배포

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/[YOUR_USERNAME]/claude-nextjs-starterkit)

## 페이지 구성

| 경로 | 내용 |
|------|------|
| `/` | 홈 (Hero + 서비스 미리보기 + 포트폴리오 + CTA) |
| `/about` | 회사소개 (통계, 미션/비전, 연혁) |
| `/services` | 서비스 전체 목록 |
| `/portfolio` | 포트폴리오 (카테고리 필터) |
| `/contact` | 문의하기 (폼) |
