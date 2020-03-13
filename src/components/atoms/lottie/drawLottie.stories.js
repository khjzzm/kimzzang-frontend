import React from 'react';
import DrawLottie from './drawLottie';
import animation from './samples/human.json';
import animation2 from './samples/machine.json';
import animation3 from './samples/heartOn.json';
import animation4 from './samples/heartOff.json';

export default {
  title: 'Components|Atoms/Lottie'
  , component: DrawLottie
};

export const Basic = () =>
    <DrawLottie animation={animation} width="300px" height="300px" startBtn={true} pauseBtn={true} stopBtn={true} hide={true} />
;

export const Hide = () =>
    <DrawLottie animation={animation2} hide={true} showBtn={true} loop={false} />
;

export const speedAndDirection = () =>
    <DrawLottie animation={animation2} loop={true} auto={false} direction={-1} speed={0.5} startBtn={true} />
;

export const toggle = () =>
    <DrawLottie animation={animation3} toggleAnimation={animation4} loop={false} />
;

export const callByUrl = () =>
    <DrawLottie url="https://assets8.lottiefiles.com/private_files/lf30_d3c6cL.json" loop={true} width="200px" height="200px" />
;