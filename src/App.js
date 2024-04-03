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

    /*
    프로퍼티 (propy)
    - 상위 컴포넌트에서 하위 컴포넌트로 값을 전달할때 사용
    - 상위 컴포넌트 문법
    <하위 컴포넌트 이름 속성="value" 속성={변수}/>
      ** 컴포넌트는 무조건 대문자로 시작
      
    - 하위 컴포넌트 문법
    const 하위 컴포넌트 =(props)=>{}
    props.속성

    const 하위 컴포넌트 =({속성1, 속성2})=>{}
    속성1, 속성2
    */
  // let temp=prompt("음료의 온도를 골라주세요 (차가운 or 뜨거운")
  // let temp="ice"
  // let price=5800
  let teamName=prompt("팀명을 적어")
  return (
    
    <div className="App">
      
    {/* 
      예제 실습
      팀원들의 이름이 담긴 Member컴포넌트 작성
      1. 사용자에게 "당신의 팀 이름은?" => 입력한 값으로 팀 이름
      2. 나머지는 본인의 팀원 이름으로 세팅 
      */}
    
      <Member teamName={teamName}></Member>

      {/* <h1>메뉴판</h1>
      <MenuBox name="mintchoco" temp={temp} price={price}></MenuBox>
      <MenuBox name="latte" temp={temp} price={price}></MenuBox>
      <MenuBox name="민트초코파인애플피자" temp={temp} price={price}></MenuBox> */}
    
    {/* 예제 실습
    1. 멤버라는 이름의 컴포넌트파일 생성
    -> 컴포넌트 파일안에 생성
    -> 팀 이름과 내 이름이 포함되어 있을것
    2. app.js에서 menber 컴포넌트를 띄어보자
    3. 멤버를 두번 반복시켜보자
  */}
    </div>
  );
}

export default App;
