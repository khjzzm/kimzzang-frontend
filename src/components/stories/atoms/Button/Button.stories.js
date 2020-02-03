import React from 'react';
import Button from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'components|atoms/Button', // 스토리북에서 보여질 그룹과 경로를 명시
    component: Button, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs], // 애드온 적용
    parameters: {
        componentSubtitle: '"버튼"을 위한 컴포넌트'
    }
};

export const Default = () => {
    // knobs 만들기
    const name = text('name', '반갑습니다');
    return (
        <Button name={name}/>
    );
};


export const btn = () => {
    // knobs 만들기
    const name = text('name', '두번째버튼');
    return (
        <Button name={name} chat={action("물품보관실")}/>
    );
};
