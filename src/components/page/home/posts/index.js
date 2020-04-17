import React, {useEffect, useState} from 'react';
import * as api from "../../../../lib/api/post";

import PostCardMinimal from '../../../molecules/post-card-minimal/psotCardMinimal';
import BlogPostsWrapper, { SecTitle } from './style';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        _callPostList();
    },[]);

    const _callPostList = () => {
        api.postsList().then(response =>{
            setPosts(response.data);
        });
    };

    return (
        <BlogPostsWrapper>
            <SecTitle>Leatest Stories</SecTitle>

            {posts.map((post) => {
                console.log(post);
                return (
                    <PostCardMinimal
                        key={post.id}
                        title={post.title}
                        image={post.img}
                        // url={node.fields.slug}
                        description={post.content}
                        date={post.modifiedDate}
                        // tags={node.frontmatter.tags}
                    />
                );
            })}

        </BlogPostsWrapper>
    );
};

export default Posts;