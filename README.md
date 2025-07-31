# 🛍️ Swim Shopping Mall

React 기반으로 만든 개인 쇼핑몰 프로젝트입니다.
실제 쇼핑몰의 흐름(상품 탐색 → 장바구니 → 주문 → 결제 완료)을 구현해보며, 
React 생태계와 상태 관리, 라우팅, UI 구현 경험을 쌓았습니다.

## 🔗 배포 링크
[https://ohyeongrong.github.io/swim-shopping-mall](https://ohyeongrong.github.io/swim-shopping-mall)

## 📂 GitHub 레포지토리
[https://github.com/ohyeongrong/swim-shopping-mall](https://github.com/ohyeongrong/swim-shopping-mall)

---

## 📌 프로젝트 소개
- **개발 기간**: 2025.07 ~ 2025.08
- **기술 스택**:  
  - **Frontend**: React, React Router, Zustand, Tailwind CSS
  - **API 통신**: Axios (Mock API)
  - **기타**: Swiper, Vite, Git, GitHub

---

## 🔹 주요 기능
1. **상품 목록** – axios로 Mock 제품 데이터(JSON) 로드, 카테고리/검색 필터링
2. **상품 상세 페이지** – 이미지 슬라이드, 옵션 선택, 수량 변경
3. **장바구니** – 상품 추가/삭제, 수량 변경 , 전체선택/삭제
4. **주문 기능** – 주문서 작성, 배송지 입력, 주문 정보 요약 및 완료 페이지 표시  
5. **로그인 및 회원가입** – 로그인/회원가입 (상태 관리 기반) 
6. **반응형 UI** – PC / Mobile 화면 대응
7. **공통 UI** - Header, Footer, 하단 네비게이션, 버튼 등 컴포넌트화

---

## 🚀 설치 및 실행 방법

```bash
# 1. 프로젝트 클론
git clone [https://github.com/ohyeongrong/swim-shopping-mall]

# 2. 패키지 설치
npm install

# 3. 로컬 실행
npm run dev

```

## 📂 폴더 구조

```
src/components/common  # 공통 UI 컴포넌트 (Header, Footer, 버튼 등)
src/components/[페이지명] # 해당 페이지 전용 컴포넌트
src/pages       # 페이지 단위 컴포넌트 (라우트 단위)
src/store       # 전역 상태 관리 (Zustand)
src/hooks       # 커스텀 훅
src/data        # 목업 데이터, 라우트 메타, 홈 배너용 임시 데이터
public/data       # 제품 데이터(JSON)

```

---

## 어려웠던 점과 해결 방법
- 컴포넌트 재사용 → 공통 UI를 분리하고 역할 기반 폴더 구성
- 전역 상태 공유 → Zustand로 장바구니, 유저정보 등 상태 관리
- 이미지 슬라이더 구현 → Swiper 모듈로 썸네일 연동
- 페이지 전환 시 스크롤 유지 → useEffect + useLocation 활용
- Git 브랜치 충돌 해결 → stash/commit으로 충돌 관리 경험

## 아쉬운 점 및 개선 아이디어
- PC 레이아웃 일부 정렬/크기 문제
- 로그인 및 장바구니 데이터는 Zustand 전역 상태에만 저장되어 새로고침 시 초기화됨  
  → LocalStorage 또는 서버 API 연동으로 지속화 예정
- Next.js & TypeScript로 리팩토링 예정


## 느낀점
처음으로 처음부터 끝까지 혼자 구현한 프로젝트였습니다.
기획 → 구조 설계 → 디자인 → 개발의 전 과정을 경험하며
많은 시행착오와 학습이 있었고, 완벽하진 않지만 큰 성취를 느꼈습니다.
다음 프로젝트에서는 확장성과 유지보수성을 고려한 코드를 작성하고자 합니다.