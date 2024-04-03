// import logo from './logo.svg';
import './App.css';
import MenuBox from './components/MenuBox';
import { Member } from './components/Member';

function App() {
  /* 
  컴포넌트 : 리액트로 만들어진 앱을 이루는 최소 단위 
            반복되는 코드를 하나로 묶어서 컴포넌트로 만든다.
            내가 원하는 코드를 묶어서 "태그화" 시킨다
            반드시 대문자로 시작 => 기존 HTML태그들과 구분
      
      - 컴포넌트 생성 방법 (새로운 방법)
      1. 함수 작성,  return문 작성, export작성
      2. Extenstion 설치
      //  rafce -> 컴포넌트 자동생성
  */
  return (
    <div className="App">
      <h1>메뉴판</h1>
      <MenuBox></MenuBox>
    
    
    {/* 예제 실습
    1. 멤버라는 이름의 컴포넌트파일 생성
    -> 컴포넌트 파일안에 생성
    -> 팀 이름과 내 이름이 포함되어 있을것
    2. app.js에서 menber 컴포넌트를 띄어보자
    3. 멤버를 두번 반복시켜보자
    */}

    <Member></Member>
    <Member></Member>

    
    </div>
  );
}

export default App;
