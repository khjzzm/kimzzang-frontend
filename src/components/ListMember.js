import React, { Component } from "react";

import * as api from "../lib/api/member";

class ListMember extends Component {
    getMemberList = () => {
        api.memberList().then(response => response.json())
        .then(result =>
            this.setState({
                postList: result
            })
        );
    }

    state = {
        memberList: [],
        completed: 0
    };
    //Propertly Initializer Syntax를 사용한 메서드

    componentDidMount() {
        this.getMemberList();
        // this._callAPI2();
    }

    _progress = () => {
        const { completed } = this.state;
        this.setState({
            completed: completed >= 100 ? 0 : completed + 1
        });
    };

    _callAPI2 = async () => {
        await fetch(process.env.REACT_APP_API_SERVER_IP+"/api/member/list")
            .then(response => response.json())
            .then(result =>
                this.setState({
                    memberList: result
                })
            );
    };

    render() {
        const { memberList } = this.state;
        if(memberList.length > 0){
            return memberList.map((member, index) => {
                return(
                    <div>
                        {member.id} | 
                        {member.name} | 
                        {member.address.city}
                    </div>
                )
            })
        }else{
            return(
                <div>No</div>
            )
        }
    }
}

export default ListMember;
