# 1. Meeting Log

### #컴포넌트 구조 설계

- 각 컴포넌트 재사용 가능 컴포넌트 그룹 명시
- URL 라우팅 페이지 및 자식 컴포넌트 설계
- 1대N의 객체리스트 및 단일 객체 컴포넌트 구분 및 명시

- 고민해야할 문제
  - 초기 시작 페이지(AnimeJs)의 HomeView로의 자동 매핑이 가능한 것인가?
  - 그렇다면 URL 라우팅으로 해야하는가 아니면 HomeView와 연관 컴포넌트로 넣어야하는가

- 카드리스트는 틀은 비슷하나 Actor, Movie 등  각자가 다른 객체 리스트와 속성들을 가지므로 분리

![캡처](https://user-images.githubusercontent.com/90893428/168295860-8aec96e1-04a0-4473-9587-112e8b747763.PNG)



