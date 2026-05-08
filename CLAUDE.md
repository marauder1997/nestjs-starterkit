# 중소기업 해외진출 홈페이지 Starter Kit

## 프로젝트 개요
중소기업 해외진출 소개 홈페이지 제작 지원을 위한 **템플릿 복제형 Starter Kit**.
각 지원 기업마다 이 템플릿을 복제하여 커스터마이징하는 방식으로 운영한다.

## 기술 스택
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v3.4.x
- **UI Components**: shadcn/ui (latest)
- **Package Manager**: pnpm
- **Animation**: Framer Motion
- **Deployment**: Vercel + GitHub

## Hard Rules (절대 위반 금지)
1. 회사 정보는 반드시 `/src/data/` 폴더의 JSON 파일에서만 관리 — 코드에 하드코딩 금지
2. 환경변수(`.env`)에 비밀키 직접 노출 금지 — `.env.example`만 커밋
3. 허락 없이 페이지 추가/삭제 금지
4. shadcn/ui 설치 시 `--legacy-peer-deps` 플래그 필수
5. `params`는 반드시 `await` 사용 (Next.js 15 Breaking Change)
6. `Date`, `Math.random()`은 `useEffect` 안에서만 사용 (Hydration 에러 방지)

## 데이터 관리 구조
- 회사 정보, 서비스, 포트폴리오 데이터는 모두 `/src/data/*.json`으로 관리
- 코드를 몰라도 JSON 파일 수정만으로 콘텐츠 변경 가능

## 디렉토리 구조
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # 홈 (Hero + 서비스 요약 + 파트너)
│   ├── about/            # 회사 소개
│   ├── services/         # 서비스/사업 영역
│   ├── portfolio/        # 포트폴리오
│   ├── news/             # 뉴스/공지
│   └── contact/          # 문의하기
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # 페이지별 섹션 컴포넌트
│   └── ui/               # shadcn 컴포넌트
├── data/                 # JSON 데이터 파일 (콘텐츠 관리)
└── lib/                  # 유틸리티 함수
```

## 대화 스타일
- 항상 한국어로 대답
- 코드 변경 전 무엇을 바꿀지 먼저 알려줌
- 오류 발생 시 원인 먼저 설명 후 수정
