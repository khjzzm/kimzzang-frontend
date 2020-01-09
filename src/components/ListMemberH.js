import React, { useState, useEffect } from 'react';

const ListMemberH = () => {
    
    const [memberList, setMemberList] = useState([]);
    const [completed, setCompleted] = useState(0);

    useEffect(()=>{
        _callAPI2();
    }, []);

    const _progress = () => {
        const { completed } = this.state;
        this.setState({
            completed: completed >= 100 ? 0 : completed + 1
        });
        // setCompleted(completed: completed >= 100 ? 0 : completed)
    };


    const _callAPI2 = async () => {
        await fetch("/api/member/list")
            .then(response => response.json())
            .then(result =>
                setMemberList(result)
            );
    };

    
    //TODO: Hook
    const isMemberList = memberList.map((member)=>{
        
    })

    return (
        
        <div>
            {isMemberList}
        </div>
    );

}

export default ListMemberH;
