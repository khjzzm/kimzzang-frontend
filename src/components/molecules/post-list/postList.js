import * as React from 'react';
import {Link} from "react-router-dom";
import {
    PostListWrapper,
    PostPreview,
    PostDetails,
    PostTitle,
    PostMeta,
    PostDate,
    PostTags,
} from './postList.style';


const PostList = ({image, title, url, date, tags, className, imageType, ...props}) => {
    // Add all classs to an array
    const addAllClasses = ['post_list'];

    // className prop checking
    if (className) {
        addAllClasses.push(className);
    }

    return (
        <PostListWrapper className={addAllClasses.join(' ')} {...props}>
            <Link to={url}>
                {image == null ? null : (
                    <PostPreview className="post_preview">
                        {imageType === 'fluid' ? (
                            {/*<Img fluid={image} alt="post preview" />*/}
                        ) : (
                            {/*<Img fixed={image} alt="post preview" />*/}
                        )}
                    </PostPreview>
                )}

                <PostDetails>
                    <PostTitle className="post_title">{title}</PostTitle>
                    <PostMeta>
                        {date && (
                            <PostDate
                                dangerouslySetInnerHTML={{
                                    __html: date,
                                }}
                                className="post_date"
                            />
                        )}
                        {tags == null ? null : (
                            <PostTags className="post_tags">
                                {tags.map((tag, index) => (
                                    <span key={index}>{`#${tag}`}</span>
                                ))}
                            </PostTags>
                        )}
                    </PostMeta>
                </PostDetails>
            </Link>
        </PostListWrapper>
    );
};

PostList.defaultProps = {
    imageType: 'fluid',
};

export default PostList;
