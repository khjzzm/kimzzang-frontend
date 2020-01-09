import React from 'react';
import AlertBox from './AlertBox'

// 비구조화 할당 문법: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const YourName = ({ name, age }) => {
    return (
        <div>
            안녕하세요! 당신의 이름은 <b>{name}</b> 입니다.
            안녕하세요! 당신의 나이는 <b>{age}</b> 입니다.
            상태 비저장 컴포넌트는 상태 객체가 없으며, 컴포넌트 메서드 또는 다른 React의 라이프 사이클 이벤트 또는 메서드를 갖지 않습니다.
            상태 비저장 컴포넌트의 목적은 오직 뷰를 렌더링 하는 것입니다.

            상태비저장 컴포넌트는 더 많이 사용할수록, 상태저장 컴포넌트는 더 적게 사용할 수록 좋다 - 랙트 교과서

            <AlertBox>
                <h1>You have pending notifications</h1>
            </AlertBox>
        </div>
    );
};

export default YourName;