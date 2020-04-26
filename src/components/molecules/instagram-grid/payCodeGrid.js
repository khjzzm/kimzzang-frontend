import * as React from 'react';
import {
    InstagramGridWrapper,
    PostImage,
    PostMeta,
    Overlay,
    MetaItem,
    MetaIcon,
    MetaText,
} from './payCodeGrid.style';
import {FaDonate} from 'react-icons/fa';

const PayCodeGrid = ({image, alt, comment, url,}) => {
    return (
        <InstagramGridWrapper>
            <a href={url}>
                <Overlay/>
                <PostImage>
                    <img src={image} alt={alt || 'pay code'}/>
                </PostImage>
                <PostMeta>
                    <MetaItem>
                        <MetaIcon>
                            <FaDonate size="23px"/>
                        </MetaIcon>
                        <MetaText dangerouslySetInnerHTML={{__html:comment}}/>
                    </MetaItem>
                </PostMeta>
            </a>
        </InstagramGridWrapper>
    );
};

export default PayCodeGrid;
