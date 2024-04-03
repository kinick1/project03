// const Member=()=>{
//     return(
//         <div>

//             <h2>준</h2>

//         </div>
//     )
// }
// export default Member;

// 선형 객체 구조
// import React from 'react'

// export const Member = (props) => {

//   return (
//     <div>
//         <p>{props.teamName}</p>
//         <p>수빈</p>
//         <p>반석</p>
//         <p>준</p>
//         <p>현정</p>
//         <p>유민</p>
//     </div>
//   )
// }
import React from 'react'

// 선형구조화 할당
// props -> const Member=(props)=>{teamName:"app.js의 프롬프트에서 입력받은값"} 의 구조로 되어있음
// 비구조화 할당 구조 
// 객체 안에 있는 값을 추출해 변수로 바로 선언해줄 수 있는 개념
// const Member=({teamName}=>{teamName:"app.js의 프롬프트에서 입력받은값"})
export const Member = ({teamName}) => {

  return (
    <div>
        <p>{teamName}</p>
        <p>수빈</p>
        <p>반석</p>
        <p>준</p>
        <p>현정</p>
        <p>유민</p>
    </div>
  )
}