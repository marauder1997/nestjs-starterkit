# 프로젝트 완료 보고서

**프로젝트명**: 중소기업 해외진출 홈페이지 Starter Kit
**작업일**: 2026년 5월 8일
**저장소**: https://github.com/marauder1997/nestjs-starterkit

---

## 1. 프로젝트 개요

중소기업 해외진출 소개 홈페이지를 빠르게 제작·지원하기 위한 **템플릿 복제형 Starter Kit**을 구축했습니다.
각 지원 기업마다 이 템플릿을 복제하여 JSON 파일만 수정하면 새 홈페이지를 완성할 수 있는 구조입니다.

---

## 2. 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | 16.2.5 |
| 언어 | TypeScript | 5.9.3 |
| 스타일 | Tailwind CSS | v4.2.4 |
| UI 컴포넌트 | shadcn/ui | latest |
| 애니메이션 | Framer Motion | 12.38.0 |
| 패키지 매니저 | pnpm | 11.0.8 |
| 배포 | Vercel + GitHub | - |

---

## 3. 구현 페이지

| 경로 | 페이지 | 주요 기능 |
|------|--------|----------|
| `/` | 홈 | Hero 배너, 서비스 미리보기, 포트폴리오 미리보기, CTA |
| `/about` | 회사소개 | 통계 수치, 미션/비전, 연혁 타임라인 |
| `/services` | 서비스 | 6개 서비스 카드, 진행 프로세스 4단계 |
| `/portfolio` | 포트폴리오 | 6개 프로젝트, **카테고리 필터** (동남아/유럽/북미 등) |
| `/contact` | 문의하기 | 상담 신청 폼, 제출 완료 화면 |

---

## 4. 디렉토리 구조

```
claude-nextjs-starterkit/
├── src/
│   ├── app/                  # Next.js 페이지 (App Router)
│   │   ├── layout.tsx        # 루트 레이아웃 (Header + Footer)
│   │   ├── page.tsx          # 홈
│   │   ├── about/page.tsx    # 회사소개
│   │   ├── services/page.tsx # 서비스
│   │   ├── portfolio/page.tsx# 포트폴리오
│   │   └── contact/page.tsx  # 문의하기
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   └── sections/         # Hero, ServicesPreview, PortfolioPreview, CtaBanner
│   └── data/                 # ← 콘텐츠 관리 핵심
│       ├── company.json      # 회사 정보
│       ├── services.json     # 서비스 목록
│       └── portfolio.json    # 포트폴리오
├── docs/
│   ├── DEVELOPMENT_ROADMAP.md
│   └── PROJECT_REPORT.md
├── CLAUDE.md                 # AI 협업 규칙
├── .env.example              # 환경변수 템플릿
└── .gitignore
```

---

## 5. 핵심 설계 원칙

### 콘텐츠 분리 (Hard Rule #1)
모든 회사 정보는 `src/data/` JSON 파일에서만 관리합니다.
→ 코드를 몰라도 JSON만 수정하면 커스터마이징 완료

### 에러 방지 규칙 (조사 기반 적용)
| 규칙 | 적용 이유 |
|------|----------|
| pnpm 사용 | npm의 ERESOLVE 의존성 충돌 방지 |
| `params`는 `await` | Next.js 15+ Breaking Change |
| `Date`는 `useEffect` 안에서만 | Hydration 에러 방지 |

---

## 6. 에러 체크 결과

| 단계 | 내용 | 결과 |
|------|------|------|
| 에러 체크 #1 | dev 서버 실행 | ✅ 정상 (332ms 시작) |
| 에러 체크 #2 | TypeScript + 프로덕션 빌드 | ✅ 오류 0건 |
| 에러 체크 #3 | GitHub Push | ✅ 완료 |

---

## 7. 트러블슈팅 기록

| 문제 | 원인 | 해결 |
|------|------|------|
| `pnpm install` 실패 | `sharp`, `unrs-resolver` 빌드 스크립트 차단 | `package.json`에 `onlyBuiltDependencies` 추가 |
| shadcn/ui 설치 실패 | `msw` 빌드 스크립트 차단 | `onlyBuiltDependencies`에 `msw` 추가 |
| GitHub Push 실패 | 토큰에 `workflow` scope 없음 | GitHub Actions 파일 제외 후 Push |

---

## 8. 다음 단계 (To-Do)

### 즉시 처리 필요
- [ ] **토큰 폐기**: https://github.com/settings/tokens (대화창 노출)
- [ ] **Vercel 배포**: vercel.com → Import → `nestjs-starterkit`

### 커스터마이징 방법
1. `src/data/company.json` → 회사명, 슬로건, 연락처 수정
2. `src/data/services.json` → 서비스 항목 수정
3. `src/data/portfolio.json` → 포트폴리오 프로젝트 수정
4. `src/app/globals.css` → 브랜드 색상 변경

### 선택 추가 기능
- [ ] 문의 폼 이메일 발송 (Resend API 연동)
- [ ] 한/영 전환 (next-intl)
- [ ] 자동 사이트맵 (next-sitemap)
- [ ] Google Analytics 연동

---

## 9. 배포 방법 (Vercel)

```
1. vercel.com 접속 → 로그인
2. "Add New Project" → "Import Git Repository"
3. nestjs-starterkit 선택
4. Framework: Next.js (자동 감지)
5. Deploy 클릭
→ https://nestjs-starterkit-xxx.vercel.app 생성
```

---

*보고서 작성: Claude Sonnet 4.6 | 작업일: 2026-05-08*
