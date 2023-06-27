# ✨ OUR SHOP

<img width="956" alt="m" src="https://user-images.githubusercontent.com/102905624/208031267-8557a802-6d20-4fc4-b131-92ada1667f2b.png">

### 📍 https://etoile-ourshop.netlify.app

```
🖥 크롬 브라우저에 최적화되어 있습니다.
🔊 웹 위주의 프로젝트로 일반적인 태블릿 크기의 해상도(768px)까지만 지원합니다.
```

### 테스트용 계정

-   구매회원

|   `id`   | `password` |
| :------: | :--------: |
| customer |  ourshop1  |

-   판매회원

|  `id`   | `password` |
| :-----: | :--------: |
| oursell |  ourshop1  |

<br><br>

## 📋 프로젝트 소개

🖥 OUR SHOP은 판매자와 구매자가 상품을 거래하는 오픈 마켓입니다.

💁 사업자 등록증이 있는 개인 판매자나 소규모 업체가 상품을 등록하고 판매할 수 있습니다.

🙋‍♀️ 구매자들은 다양한 판매처의 상품들을 한 사이트에서 구매할 수 있습니다.

<br><br>

## 📋 개발 환경

### Front-End

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/ReactHookForm-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=white"> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">

-   React.js 18.2
-   TypeScript 4.8
-   styled-components 5.3
-   react-router-dom 6.4
-   React-hook-form 7
-   react-query 3.3
-   axios
-   react-slick

### Back-End

-   제공된 API 사용

<br><br>

## 📋 기능

```
🔐 인증
- 권한별 접근 제한
- 구매자/판매자 로그인 및 로그아웃
- 구매자/판매자 회원가입
- 유효성 검사

🏠 메인
- 검색: 상품 이름, 상품 판매자
- 캐러셀
- 상품 목록
- 상품 클릭 시 해당 상세 페이지로 이동
- 무한 스크롤

🛍 상품 상세
- 상세 정보 표출
- 상품 수량 설정
- 재고 초과 시 수량 변경 버튼 비활성화
- 수량 소진 시 품절 처리
- 상품 장바구니 추가
- 이미 장바구니에 담긴 상품인지 확인
- 상품 바로 구매

🛒 장바구니
- 상품 수량 수정
- 상품 삭제
- 체크박스를 통한 상품 전체/개별 선택에 따른 가격 표시
- 체크박스를 통한 상품 전체/개별 선택에 따른 주문
- 상품 바로 주문

💁‍♂️ 판매자
- 판매 상품 등록/수정/삭제
- 판매 상품 목록 페이지네이션
- 상품 상세 페이지 버튼 비활성화

🎾 공통
- 반응형 레이아웃
- 모달
```

<br><br>

## 📋 폴더 구조

```
📦 public
 ┣ 📃 index.html
📦 src
 ┣ 📂 assets
 ┣ 📂 components
 ┃ ┣ 📂 cart
 ┃ ┣ 📂 common
 ┃ ┣ 📂 main
 ┃ ┣ 📂 modal
 ┃ ┣ 📂 payment
 ┃ ┣ 📂 productDetail
 ┃ ┣ 📂 register
 ┃ ┣ 📂 route
 ┃ ┣ 📂 search
 ┃ ┣ 📂 seller
 ┣ 📂 pages
 ┃ ┣ 📂 cart
 ┃ ┣ 📂 join
 ┃ ┣ 📂 login
 ┃ ┣ 📂 main
 ┃ ┣ 📂 notification
 ┃ ┣ 📂 payment
 ┃ ┣ 📂 productDetails
 ┃ ┣ 📂 search
 ┃ ┣ 📂 seller
 ┣ 📂 styles
 ┣ 📃 App.tsx
 ┗ 📃 index.tsx
```
