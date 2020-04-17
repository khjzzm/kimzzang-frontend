import React, { useReducer, useEffect } from 'react';
import SearchReducer, { initialState } from './searchReducer';
import { Scrollbars } from 'react-custom-scrollbars';
import { rebuildIndex } from './searchIndexBuilderFunction';
import PostList from '../../molecules/post-list/postList';
import {
    SearchWrapper,
    SearchForm,
    SearchResult,
    NoResult,
    SearchResultContainer,
} from './search.style';

function Search() {
    const [state, dispatch] = useReducer(SearchReducer, initialState);

    /**
     * handles the input change and perfom a search with js-search
     * in which the results will be added to the state
     */
    const searchData = (e) => {
        const { search } = state;
        const queryResult = search.search(e.target.value);
        dispatch({
            type: 'SET_SEARCH_QUERY',
            payload: { searchQuery: e.target.value, searchResults: queryResult },
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // useEffect(() => {
    //     if (dataset.length !== 0) {
    //         let data = [];
    //         dataset.forEach(({ node }) => {
    //             let formatedData = {
    //                 ...node.frontmatter,
    //                 slug: node.fields.slug,
    //             };
    //             data.push(formatedData);
    //         });
    //
    //         dispatch({ type: 'SET_DATA', payload: data });
    //         const dataToSearch = rebuildIndex(data);
    //         if (dataToSearch) {
    //             dispatch({
    //                 type: 'SET_SEARCH',
    //                 payload: dataToSearch,
    //             });
    //         }
    //     }
    // }, [dataset]);

    const { totalData, searchResults, searchQuery } = state;
    const queryResults = searchResults;

    return (
        <SearchWrapper>
            <SearchForm onSubmit={handleSubmit}>
                <input
                    id="Search"
                    value={searchQuery}
                    onChange={searchData}
                    placeholder="Enter Your Search Topic"
                />
            </SearchForm>
            <SearchResult>
                {queryResults.length == 0 && searchQuery !== '' ? (
                    <NoResult>No result found</NoResult>
                ) : (
                    ''
                )}

                {queryResults.length !== 0 && (
                    <Scrollbars
                        autoHeight={true}
                        autoHeightMax={505}
                        className="search-scrollbar"
                    >
                        {queryResults.map((item) => {
                            return (
                                <PostList
                                    key={item.slug}
                                    title={item.title}
                                    url={item.slug}
                                    image={
                                        item.cover == null ? null : item.cover.childImageSharp.fluid
                                    }
                                    date={item.date}
                                    tags={item.tags}
                                />
                            );
                        })}
                    </Scrollbars>
                )}
            </SearchResult>
        </SearchWrapper>
    );
}

export default Search;
