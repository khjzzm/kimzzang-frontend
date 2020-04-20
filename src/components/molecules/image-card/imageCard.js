import * as React from 'react';
import {Link} from "react-router-dom";
import {
    ImageCardWrapper,
    PostPreview,
    PostDetails,
    PostTitle,
    ReadingTime,
} from './imageCard.style';

const ImageCard = ({image, title, url, className, imageType, readTime, ...props}) => {
    const addClass = ['featured_card'];

    if (className) {
        addClass.push(className);
    }

    return (
        <ImageCardWrapper className={addClass.join(' ')} {...props}>
            <Link to={url}>
                {image == null ? null : (
                    <PostPreview className="post_preview">
                        <img src={image}/>
                    </PostPreview>
                )}

                <PostDetails className="post_details">
                    <PostTitle className="post_title">
                        <span>{title}</span>
                    </PostTitle>
                    <ReadingTime className="read_time">
                        <span>{readTime}</span>
                    </ReadingTime>
                </PostDetails>
            </Link>
        </ImageCardWrapper>
    );
};


export default ImageCard;
