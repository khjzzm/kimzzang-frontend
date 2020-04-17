import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

/**
 * 버튼이벤트만드는 연습중
 *
 * - `name` 컴포넌트 제목
 * - `chat` 메세지창 내용
 */
const Btn = (props) => {
    return (
        <div>
            <Button variant={props.variant} color={props.color}>{props.content}</Button>
        </div>
    );
};

Btn.propTypes = {
    /** 보여주고 싶은 이름 */
    variant: PropTypes.string.isRequired,
    /** name 버튼 누를 때 호출할 함수 */
    color: PropTypes.string,
};

Btn.defaultProps = {
    content: "버튼"
};

export default Btn;