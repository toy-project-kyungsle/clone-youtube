![스크린샷 2021-05-08 오후 6 44 30](https://user-images.githubusercontent.com/79993356/117534682-7e111e00-b02d-11eb-8c27-d81892964093.png)

<br>

이 프로젝트는 유튜브 페이지를 클론 코딩하는 과정을 통해 웹페이지를 구성하는 법을 공부하기 위한 프로젝트 입니다.

먼저 html파일을 살펴본 후 똑같이 만들어 봅니다!

이 프로젝트는 유튜브의 강의에서 나름대로 업그레이드 한 버젼입니다. <a href="https://www.youtube.com/watch?v=67stn7Pu7s4&list=PLv2d7VI9OotQ1F92Jp9Ce7ovHEsuRQB3Y&index=15">참고</a>

<br>

이하로는 클론코딩 시에 유용한 개념들을 정리했습니다.

---

### ✅ display: inline-block 사이에서 공백이 생기는 문제

<br>

![1](https://user-images.githubusercontent.com/79993356/117539160-6a24e680-b044-11eb-8f2b-0a058d7e1a8a.png)

<br>

이런 식으로 코드를 짜면 당연히 1과 2가 한 줄에 있다고 생각 되지만 사실 그렇지 않다.
그 이유는 두 inline-block에서 '공백'이 있다고 생각해버려서 그렇다.

따라서 다음과 같은 방식으로 만들면 공백이 없다고 생각해 한 줄에 표시가 가능하다.

![2](https://user-images.githubusercontent.com/79993356/117539162-6beeaa00-b044-11eb-89a8-2f7bbef1993c.png)

가운데에다 주석을 넣어서 표시상의 공백을 없애버리는 것이다!

<br>
<br>

### ✅ Header, section, footer의 사용 이유

<br>

<a href="https://webdir.tistory.com/310">참고사이트</a>

<br>

HEADER 요소

HTML5에 새롭게 추가된 요소로서, 웹 문서 맨 윗부분에 있으며 웹 사이트 이름, 글로벌 링크(로그인, 회원가입, 사이트맵, 언어 선택등 웹사이트 어느 곳에서든지 이용할 수 있는 링크)등으로 구성된 영역이다.

NAV 요소

HTML5에 새롭게 추가된 요소로서, 목적지로 이동할 수 있도록 링크를 별도로 모아둔 영역이다.

SECTION 요소

HTML5에 새롭게 추가된 요소로서, 섹션을 표시한다.

ARTICLE 요소
HTML5에 새롭게 추가된 요소로서, 독립적으로 구성된 글을 표시한다.

MAIN 요소

HTML5 권고후보에 main요소가 추가되었다.<a href="http://www.w3.org/html/wg/drafts/html/CR/">참고</a>

ASIDE 요소

HTML5에 새롭게 추가된 요소로서, 페이지 전체 내용과는 어느정도 관련성이 있지만 주요 내용과는 직접적인 연관성은 없는 분리된 내용을 담고 있다.

FOOTER 요소

HTML5에 새롭게 추가된 요소로서, 웹 문서 맨 아래쪽에 있으며 저작권, 연락처등으로 구성된 영역이다.

<br>
<br>

### ✅ video tag

<br>

![3](https://user-images.githubusercontent.com/79993356/117539164-6c874080-b044-11eb-977f-4f95032723df.png)

<br>

controls는 비디오에 컨트롤이 생기는 것

autoplay는 파일을 켜면 알아서 실행이되는 것

<br>
<br>

### ✅ Border 와 Outline의 차이

<a href="https://m.blog.naver.com/PostView.nhn?blogId=iyakiggun&logNo=100159740947&proxyReferer=https:%2F%2Fwww.google.co.kr%2F">
참고사이트</a>

<br>

![4](https://user-images.githubusercontent.com/79993356/117539165-6d1fd700-b044-11eb-881b-320c7ac78fed.jpg)

<br>

border 속성은 순서대로 두께(3px)와 선의 종류 (solid) 그리고 색상(black)으로 마무리 합니다.

그런 뒤에 브라우저에서 개발자모드로 현재 박스의 사이즈를 확인해봅시다.

어라? 상하좌우 3px 테두리가 들어가면서 테두리를 합한 값인 406px \* 156px이 되었습니다. border는 테두리 두께만큼 박스 사이즈도 같이 크게 만드는 겁니다. 무슨 말인지 이해가 되시나요?

![5](https://user-images.githubusercontent.com/79993356/117539166-6db86d80-b044-11eb-97c9-cbc5d3412b10.jpg)

<b>가로 \* 세로 사이즈가 두께만큼 늘어났습니다.</b>

물론 현재 div 박스의 크기는 400 \* 150이 맞습니다.

이 안에 텍스트나 이미지 등을 넣어도 박스 사이즈는 400 _ 150이죠. 하지만 테두리가 덧붙여지기 때문에 실제 사이즈는 406 _ 156이 되는 겁니다.

마찬가지로 테두리 두께가 커지면 박스가 차지하는 사이즈도 점점 커지기 때문에, 만약 border값이 들어간 이미지 같은 것을 작업할 때에는 width 값과 border 값을 계산해서 작업을 해야 레이아웃이 틀어지지 않습니다.

![6](https://user-images.githubusercontent.com/79993356/117539168-6e510400-b044-11eb-8c47-d7737a8bdcf9.jpg)

border와 동일한 속성으로 outline 속성을 만들어봅시다.

그럼 이번엔 똑같은 옵션으로 outline으로 줘보죠. 그리고 결과를 확인하면 화면에 출력되는 디자인은 동일합니다. 그러나 사이즈를 확인해보면 400 \* 150 이라는 것이 나타납니다.

![7](https://user-images.githubusercontent.com/79993356/117539169-6e510400-b044-11eb-8469-d0ab8f737d12.jpg)

보이는 결과는 동일하지만 박스의 사이즈가 분명 다릅니다

차이가 오시나요?

border는 옵션의 두께만큼 박스의 전체 크기도 늘어나게 하는 반면 outline은 박스의 크기를 늘리는 게 아니라 단지 테두리만 생기는 것뿐이랍니다. 만약, 여러 개의 박스를 가로로 정렬하고 싶은데 border값을 주면 그 두께만큼 간격이 벌어지지만 outline은 간격이 벌어지지 않고 현재 위치에서 테두리만 생기게 하는 겁니다. 즉 레이아웃에 영향을 끼치지 않죠.

그럼 이번엔 border와 outline 옵션을 동시에 줘보도록 합시다. 차이를 두기 위해 서로 색상을 달리해보죠.

![8](https://user-images.githubusercontent.com/79993356/117539171-6ee99a80-b044-11eb-829f-2095a66fefe0.jpg)

border와 outline을 동시에 만들면?

![9](https://user-images.githubusercontent.com/79993356/117539173-6f823100-b044-11eb-8218-275bc4e63b7f.jpg)

보시는 것처럼 명백하게 두 속성이 어떻게 다른지 나타납니다. border는 자신의 두께만큼 박스 사이즈를 확장하면서 테두리를 만들어내지만 outline은 박스 바깥에서 테두리를 표현하기 때문에 바깥테두리에 라인이 생깁니다. 이렇게 디자인을 하면 중복적으로 div를 여러개 만들어서 border를 주지 않고도 하나의 div에서 두 개의 테두리를 디자인 할 수 있습니다.

<br>
<br>

### ✅ cursor tag

<a href="https://developer.mozilla.org/ko/docs/Web/CSS/cursor">참고사이트</a>

![10](https://user-images.githubusercontent.com/79993356/117539174-6f823100-b044-11eb-9e89-a853c7ec5369.png)

여기서 cursor태그란 무엇인가?

![11](https://user-images.githubusercontent.com/79993356/117539175-701ac780-b044-11eb-991e-505f16f75f08.png)

따라서 실제로 button 태그 위에 마우스를 가져다가 대보면 손가락 모양으로 포인터가 바뀌는 걸 알 수 있다.

<br>
<br>

### ✅ -webkit-line-clamp

<a href="https://developer.mozilla.org/ko/docs/Web/CSS/-webkit-line-clamp">참고사이트</a>

![12](https://user-images.githubusercontent.com/79993356/117539176-701ac780-b044-11eb-9ab4-7fe7d39c07e8.png)

이렇게 쓰면 화면 안에서 글의 줄이 2줄이 넘어간다면 ...이 나오면서 숨겨진다.
