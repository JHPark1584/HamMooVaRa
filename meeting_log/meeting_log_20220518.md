# 1. Meeting Log

### #회원 가입시, 추가 정보 받기

> 본 프로젝트에서 추천 알고리즘은, 유저가 선호하는 장르를 받아와 추천한다.
>
> 따라서, 회원 가입시 선호하는 장르를 입력을 받도록 구현하려 한다.



### #TodoList

* 회원 가입시 id, password1, password2 이외에 추가 정보를 입력 받는 방법 찾기
* 회원 가입 페이지에서 checkbox로 장르를 최대 3개까지 선택 가능하게 하기
* 회원 가입 버튼 활성화시, 필요한 정보들이 잘 전달 되며 정상적으로 회원가입이 되는지 확인하기



#### 추가 정보 입력

> 참고한 자료: [https://velog.io/@ready2start/DRF-djrestauth%EB%A1%9C-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0](https://velog.io/@ready2start/DRF-djrestauth로-커스텀-회원가입-구현하기)





#### 장르 3개까지 선택 가능 하게 하기

> 참고한 자료: https://vuetifyjs.com/en/components/checkboxes/#inline-text-field (vuetify 공식 문서)

* 3개가 선택되면, 나머지 항목들은 체크박스 비활성화, 선택된 항목들은 활성화 상태 유지를 위해

  `:disabled` 속성에 genre 3개이상이고 선택되어 있지 않으면 true가 되도록 설정하였다.



#### 회원 가입과 연동

* rest_api에서 JSONfield로 genre를 받도록 하였기에, vue에서 입력받은 genre를 json화 하여 넘겨주어야 한다.
* 이에 따라, credentials의 genre 항목은, genre_list의 배열을 `JSON.stringify()`메서드로 JSON화 하여 삽입하였다.





## # Community 관련 Serializer 요청 구현하기



* ModelSerializer 이슈
* 요청을 보낼때 사용자 검증에 Headers에 Token을 첨부해야 가능

### 실수 및 어려웠던 점

- `serializers.Modelserializer` 을 받아와야하나 그냥 `serializer`을 import 해서 문제가 되었었음.



### # 향후 과제

* user model 및 serializer에 profileImage 추가

