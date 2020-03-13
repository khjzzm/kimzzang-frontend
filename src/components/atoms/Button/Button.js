import React from 'react';
import PropTypes from 'prop-types';

/**
 * 버튼이벤트만드는 연습중
 *
 * - `name` 컴포넌트 제목
 * - `chat` 메세지창 내용
 */
const Hello = ({ name, chat }) => {
    return (
        <div>
            <button onClick={chat}>{name}</button>
        </div>
    );
};

Hello.propTypes = {
    /** 보여주고 싶은 이름 */
    name: PropTypes.string.isRequired,
    /** name 버튼 누를 때 호출할 함수 */
    chat: PropTypes.func,
};

Hello.defaultProps = {
    name: "안녕하슈"
};

export default Hello;