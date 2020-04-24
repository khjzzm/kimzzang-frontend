import React from 'react';
import PayCodeGrid from "../../molecules/instagram-grid/payCodeGrid";
import PayWrapper, {
    PayshowcaseCol,
    PayshowcaseRow,
} from './pay.style';


const Pay = () => {

    return (
        <PayWrapper>
            <PayshowcaseRow>
                <PayshowcaseCol>
                    <PayCodeGrid
                        image={"https://kimzzang-image-bucket.s3.ap-northeast-2.amazonaws.com/images/kakaopay.qr.jpg"}
                        alt={"kakaopay"}
                        comment={"카카오뱅크 <br/> 3333-12-1357585"}/>
                </PayshowcaseCol>
                <PayshowcaseCol>
                    <PayCodeGrid
                        image={"https://kimzzang-image-bucket.s3.ap-northeast-2.amazonaws.com/images/toss.qr.png"}
                        alt={"toss"}
                        comment={"토스(Toss)"}/>
                </PayshowcaseCol>
            </PayshowcaseRow>
        </PayWrapper>
    );
};

export default Pay;
