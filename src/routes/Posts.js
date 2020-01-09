import React, { Component } from "react";
import InsertPosts from "../components/InsertPosts.js";
import ListPosts from "../components/ListPosts.js";

class List extends Component {
    render() {
        return (
            <div>
                <InsertPosts />
                <ListPosts />
            </div>
        );
    }
}

export default List;
