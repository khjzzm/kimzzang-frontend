import * as React from 'react';
import SocialProfile from '../../molecules/social-profile/socialProfile';
import {
    IoLogoGithub,
    IoLogoInstagram,
} from 'react-icons/io';

import {
    GiMonkey
} from 'react-icons/gi';

import {
    AboutWrapper,
    AboutImage,
    AboutPageTitle,
    AboutDetails,
    SocialProfiles,
} from './style';

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

const About  = () => {

    return (
        <AboutWrapper>
            <AboutPageTitle>
                <h2></h2>
                <p></p>
            </AboutPageTitle>

            <AboutImage>
                <img src={"https://kimzzang-image-bucket.s3.ap-northeast-2.amazonaws.com/images/about.png"} alt={"about"}/>
            </AboutImage>

            <AboutDetails>
                <SocialProfiles>
                    <SocialProfile items={SocialLinks} />
                </SocialProfiles>
            </AboutDetails>
        </AboutWrapper>
    );
};

export default About;
