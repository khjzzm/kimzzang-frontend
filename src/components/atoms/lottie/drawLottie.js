import React, {useState} from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

/**
 * Animation 전달 방식은 추후 변경 예정
 *
 * - 현재: json file name / url
 */
const DrawLottie = ({ animation, loop, auto, speed, direction, callback, width, height, hide, showBtn, background, startBtn, pauseBtn, stopBtn, toggleAnimation, url }) => {
    const [currentStatus, setCurrentStatus] = useState(true); //show 버튼을 눌렀을때 true가 되고 화면에 애니메이션을 보여준다 (callback에서 false로 set)
    const [isStopped, setIsStopped] = useState(!auto);
    const [isPaused, setIsPaused] = useState(!auto);
    const [toggle, setToggle] = useState(true); //애니메이션 toggle
    let lottieOptions;

    if(url !== undefined) {
        lottieOptions = {
            path: url,
            loop: loop, //반복 재생
            autoplay: auto,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
    }else {
        lottieOptions = {
            animationData: toggle ? animation : toggleAnimation, //대상 (json)
            loop: loop, //반복 재생
            autoplay: auto, //렌더와 동시에 재생
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
    }

    const onStop = () => {
        setIsStopped(true);
    };

    const onPause = current => {
        setIsPaused(!current);
    };

    const onStart = () => {
        setIsStopped(false);
        setIsPaused(false);
    };
    
    const toggleHandler = () => {
        if(toggleAnimation !== undefined) {
            setToggle(!toggle);
            onStart();
        }
    };

    return (
        <>
            {hide ?
                <>
                    {showBtn ? <button onClick={()=>setCurrentStatus(true)}>show</button> : ''}
                    {startBtn ? <button onClick={() => onStart()}>start</button> : ''}
                    {pauseBtn ? <button onClick={() => onPause(isPaused)}>pause</button> : ''}
                    {stopBtn ? <button onClick={() => onStop()}>stop</button> : ''}
                    {currentStatus ?
                        <div style={{width:width, height:height, background:background}} onClick={()=>toggleHandler()}>
                            <Lottie
                                options={lottieOptions}
                                isStopped={isStopped}
                                isPaused={isPaused}
                                isClickToPauseDisabled={true}
                                eventListeners={[
                                    {
                                        eventName: loop ? 'loopComplete' : 'complete',
                                        callback: ()=>{
                                            callback();
                                        }
                                    },
                                ]}
                                speed={speed}
                                direction={direction}
                            />
                        </div>
                        : ''
                    }
                </>
                : <>
                    {startBtn ? <button onClick={() => onStart()}>start</button> : ''}
                    {pauseBtn ? <button onClick={() => onPause(isPaused)}>pause</button> : ''}
                    {stopBtn ? <button onClick={() => onStop()}>stop</button> : ''}
                    <div style={{width:width, height:height, background:background}} onClick={()=>toggleHandler()}>
                        <Lottie
                            options={lottieOptions}
                            isStopped={isStopped}
                            isPaused={isPaused}
                            isClickToPauseDisabled={true}
                            eventListeners={[
                                {
                                    eventName: loop ? 'loopComplete' : 'complete',
                                    callback: ()=> callback()
                                },
                            ]}
                            speed={speed}
                            direction={direction}
                        />
                    </div>
                </>
            }
        </>
    )
};

DrawLottie.propTypes = {
    animation: PropTypes.object
    /** 반복 재생 */
    , loop: PropTypes.bool
    /** 자동 재생 */
    , auto: PropTypes.bool
    , speed: PropTypes.number
    , direction: PropTypes.number
    , callback: PropTypes.func
    , width: PropTypes.string
    , height: PropTypes.string
    , hide: PropTypes.bool
    , showBtn: PropTypes.bool
    , background: PropTypes.string
    , startBtn: PropTypes.bool
    , pauseBtn: PropTypes.bool
    , stopBtn: PropTypes.bool
    , toggleAnimation: PropTypes.object
};


DrawLottie.defaultProps = {
    loop: true
    , auto: true
    , speed: 1
    , direction: 1
    , callback: ()=>{}
    , width: '200px'
    , height: '200px'
    , hide: false
    , showBtn: false
    , background: '#ffffff'
    , startBtn: false
    , pauseBtn: false
    , stopBtn: false
};

export default DrawLottie;