import React, { Component } from "react";
import axios from "axios";

class InsertMember extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            address: {
                city: "",
                street: "",
                zipcode: ""
            }
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            address: {
                ...this.state.address,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const member = {
            name: this.state.name,
            address: {
                city: this.state.address.city,
                street: this.state.address.street,
                zipcode: this.state.address.zipcode
            }
        };

        axios
            .post("/api/member/insert", JSON.stringify(member), {
                headers: { "Content-Type": "application/json;charset=UTF-8" }
            })
            .then(response => {
                if (response.status === 200) {
                    alert(response.status);
                    window.location.reload(true);
                }
            })
            .catch(e => {
                console.log(e);
            });
    };





    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    name :
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    city:
                    <input
                        type="text"
                        name="city"
                        value={this.state.address.city}
                        onChange={this.handleChange}
                    />
                    street:
                    <input
                        type="text"
                        name="street"
                        value={this.state.address.street}
                        onChange={this.handleChange}
                    />
                    zipcode:
                    <input
                        type="text"
                        name="zipcode"
                        value={this.state.address.zipcode}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>등록</button>
                </form>
            </div>
        );
    }
}

export default InsertMember;
