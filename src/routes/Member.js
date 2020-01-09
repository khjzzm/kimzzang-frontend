import React, { Component } from "react";
import ListMember from "../components/ListMember.js";
import InsertMember from "../components/InsertMember.js";

class Member extends Component {
    render() {
        return (
            <div>
                <InsertMember />
                <ListMember />
            </div>
        );
    }
}

export default Member;
