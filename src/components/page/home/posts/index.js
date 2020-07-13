import React, {useEffect, useState} from 'react';
import Masonry from 'react-masonry-component';
import * as api from "../../../../lib/api/post";
import ImageCard from "../../../molecules/image-card/imageCard";
import Button from "../../../atoms/button/button";

import BlogPostsWrapper, {
    PostRow,
    PostCol,
    SecTitle,
    LoadMoreButton,
    SectTitleWrapper,
    SecSubTitle,
} from './style';


const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postCnt, setPostCnt] = useState(0);
    const [state, setState] = useState({
        visibile: 3,
    });

    const [load, setload] = useState({
        loading: false,
    });

    useEffect(() => {
        _callPostList();
    }, []);

    const _callPostList = () => {
        api.postsList().then(response => {
            setPosts(response.data);
        });
        api.postCnt().then(response => {
            setPostCnt(response.data);
        })
    };

    const _fetchMoreData = () => {
        setload({loading: true});

        setTimeout(function () {
            setState((prev) => {
                return {visibile: prev.visibile + 6};
            });
            setload({loading: false});
        }, 1000);
    };

    return (
        <BlogPostsWrapper>
            <SectTitleWrapper>
                <SecTitle>What i've been up to</SecTitle>
                <SecSubTitle>For good.</SecSubTitle>
            </SectTitleWrapper>

            <PostRow>
                <Masonry className="showcase">
                    {posts.slice(0, state.visibile).map((post, index) => {
                        return (
                            <PostCol key={post.id}>
                                <ImageCard key={index} title={post.title} image={post.imagePath}
                                           hashTag={["flash", "youtube"]}/>
                            </PostCol>
                        );
                    })}
                </Masonry>
                <LoadMoreButton>
                    {state.visibile < postCnt ? (
                        <Button
                            title="Load more"
                            type="submit"
                            onClick={_fetchMoreData}
                            isLoading={load.loading === true ? true : false}
                            loader="Loading.."
                        />
                    ) : (
                        <p>No more posts</p>
                    )}
                </LoadMoreButton>
            </PostRow>
        </BlogPostsWrapper>
    );
};

export default Posts;