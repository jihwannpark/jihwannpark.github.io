# jihwannpark.github.io — 개인 홈페이지

Next.js(정적 빌드) + Sveltia CMS. main 브랜치에 push하면 GitHub Actions가 빌드해 GitHub Pages로 자동 배포합니다.

## 컨텐츠 수정

모든 내용은 `content/*.json`에 있습니다. 코드를 건드릴 필요가 없습니다.

| 파일 | 내용 |
|---|---|
| `content/profile.json` | 이름·소속·소개글·이메일·링크·연구 관심사·CV 주소 |
| `content/news.json` | 근황 (날짜 + 내용) |
| `content/education.json` | 학력 |
| `content/publications.json` | 논문 (`selected: true`면 첫 화면에도 표시) |
| `content/projects.json` | 참여 과제 |
| `content/awards.json` | 수상·활동 |

수정 방법 두 가지:

1. **CMS (권장)** — `https://jihwannpark.github.io/admin/` 접속 → Sign in with GitHub → 폼으로 편집 → Save. 1~2분 뒤 반영.
2. **GitHub 웹** — repo에서 JSON 파일을 ✏️로 직접 수정 → Commit.

사진은 CMS에서 업로드하면 `public/uploads/`에 저장되고 경로가 자동 입력됩니다. 프로필 사진은 `public/profile.png`입니다.

## 최초 1회 설정 (관리자)

### 1. GitHub Pages 활성화

repo → **Settings** → **Pages** → Build and deployment → Source를 **GitHub Actions**로 선택.
(브랜치 방식이 아니라 Actions 방식이어야 Next.js 빌드 결과가 배포됩니다.)

### 2. CMS 로그인 허용 도메인 추가

TCPS 사이트에 쓰던 Cloudflare Worker를 그대로 재사용합니다.

Cloudflare 대시보드 → **Workers & Pages** → `sveltia-cms-auth` → **Settings** → **Variables and Secrets** →
`ALLOWED_DOMAINS` 값에 `jihwannpark.github.io` 추가 (쉼표로 구분) → **Deploy**.

GitHub OAuth App은 기존 것을 그대로 사용하므로 추가 설정이 필요 없습니다.

## 로컬 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 정적 파일이 out/ 에 생성됨
```

## 구조

```
content/          # 사이트 내용 (JSON) — CMS가 편집하는 대상
src/app/          # 페이지 (/, /publications)
src/components/   # Nav, Footer, Authors
src/lib/content.ts# 타입 정의 + JSON re-export
public/admin/     # Sveltia CMS 관리 화면
.github/workflows/deploy.yml  # 빌드 & Pages 배포
```

디자인은 tcpslab.vercel.app의 색상(#26343a / #4b3a24 / #9c5b33)과 타이포그래피를 따르며, 레이아웃 구성은 학자형 개인 홈페이지 형식을 참고했습니다.
