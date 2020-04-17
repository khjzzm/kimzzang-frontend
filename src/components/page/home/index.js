import * as React from 'react';
import PersonalBlogWrapper from './style';
import Intro from './intro';
import Posts from './posts';

const PersonalBlog = ({...props}) => {
    return (
        <PersonalBlogWrapper {...props}>
            <Intro/>
            <Posts/>
        </PersonalBlogWrapper>
    );
};

export default PersonalBlog;
