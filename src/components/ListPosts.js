import React, { Component } from "react";
import axios from "axios";
import "./ListPosts.css";

import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

class ListPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            completed: 0
        };
    }

    componentDidMount() {
        this.timer = setInterval(this._progress, 20);
        // this._callAPI();
        this._callAPI2();
    }

    _progress = () => {
        const { completed } = this.state;
        this.setState({
            completed: completed >= 100 ? 0 : completed + 1
        });
    };

    _callAPI = () => {
        axios
            .get("/api/list")
            .then(res => {
                const postLists = res.data;
                this.setState({
                    postLists
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    _callAPI2 = async () => {
        await fetch("/api/list")
            .then(response => response.json())
            .then(result =>
                this.setState({
                    postList: result
                })
            );
    };

    render() {
        const { postList } = this.state;
        if (postList.length > 0) {
            return postList.map((post, index) => {
                return (
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>index : {index}</TableCell>
                                <TableCell>
                                    <p>title : {post.title}</p>
                                </TableCell>
                                <TableCell>
                                    <p>author : {post.author}</p>
                                </TableCell>
                                <TableCell>
                                    <p>
                                        <img
                                            src={post.img + "/" + index}
                                            alt="logo"
                                        />
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                );
            });
        } else {
            return (
                <div>
                    <CircularProgress value={this.state.completed} />
                </div>
            );
        }
    }
}

export default ListPosts;
