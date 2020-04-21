import React from 'react';
import SocialProfile from '../../../molecules/social-profile/socialProfile';

import {
    IntroWrapper,
    IntroImage,
    IntroTitle,
    Desciption,
    IntroInfo,
} from './style';
import {
    IoLogoGithub,
    IoLogoInstagram,
} from 'react-icons/io';

import {
    GiMonkey
} from 'react-icons/gi';

const SocialLinks = [
    {
        icon: <IoLogoInstagram />,
        url: 'https://www.instagram.com/kshzzm/?hl=ko',
        tooltip: 'Instagram',
    },
    {
        icon: <GiMonkey />,
        url: 'https://kmong.com/gig/191310',
        tooltip: 'kmong',
    },
    {
        icon: <IoLogoGithub />,
        url: 'https://github.com/khjzzm',
        tooltip: 'Github',
    }
];


const Intro = () => {
    const author = "Flash Design";
    const about = "그들은 가치를 귀는 끓는다. 꾸며 되는 같은 쓸쓸하랴? 피어나는 속에서 과실이 얼마나 원질이 얼음 미묘한 이상을 할지라도 것이다. 얼마나 인생을 관현악이며, 이것이야말로 봄바람이다. 석가는 대고, 없는 없으면 따뜻한 있음으로써 피에 용기가 시들어 피다. 실로 가슴에 것은 위하여서 유소년에게서 얼음이 피가 구하지 타오르고 것이다. 그들은 같이, 실현에 인간의 사막이다. 가장 싹이 날카로우나 하여도 있는가? 더운지라 가치를 그것은 청춘 이 싸인 들어 것이다. 예가 것은 하여도 별과 것이다.";

    return (
        <IntroWrapper>
            <IntroImage>
                <img src={"https://kimzzang-image-bucket.s3.ap-northeast-2.amazonaws.com/images/kimzzang.jpg"} alt={"ProfileImage"}/>
            </IntroImage>
            <IntroInfo>
                <IntroTitle>
                    Hey! I’m <b>{author}</b>
                </IntroTitle>
                <Desciption>{about}</Desciption>
                <SocialProfile items={SocialLinks} />
            </IntroInfo>
        </IntroWrapper>
    );
};

export default Intro;