import React, { useState } from "react";

const InsertMemberH = () => {

    const [form, setForm] = useState({
        name: "",
        address: {
            city: "",
            street: "",
            zipcode: ""
        }
    });
    const {name, address} = form;

    //FIXME: 수정 필요
    const onChange = e => {
        const nextForm = {
            ...form, 
            [e.target.name]: e.target.value,
            address: {
                ...form,
                [e.target.name]: e.target.value
            }-
        }
        setForm(nextForm);
    }

    const onClick = () =>{
        console.log(form)
        setForm({
            name: "",
            address: {
                city: "",
                street: "",
                zipcode: ""
            }
        })
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    }
    return (
        <div>
            {/* <form onSubmit={this.handleSubmit}> */}
                name :
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
                city:
                <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={onChange}
                />
                street:
                <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={onChange}
                />
                zipcode:
                <input
                    type="text"
                    name="zipcode"
                    value={address.zipcode}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />
                {/* <button onClick={this.handleSubmit}>등록</button> */}
            {/* </form> */}
        </div>
    );
};

export default InsertMemberH;
