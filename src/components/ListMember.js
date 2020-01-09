import React, { Component } from "react";

class ListMember extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         memberList: [],
    //         completed: 0
    //     };
    // }

    state = {
        memberList: [],
        completed: 0
    };
    //Propertly Initializer Syntax를 사용한 메서드

    componentDidMount() {
        this._callAPI2();
    }

    _progress = () => {
        const { completed } = this.state;
        this.setState({
            completed: completed >= 100 ? 0 : completed + 1
        });
    };

    _callAPI2 = async () => {
        await fetch("/api/member/list")
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
