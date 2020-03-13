import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../store/modules/base';
import Input from '../components/molecules/Input';

class InputContainer extends Component {

    handleChange = (e) => {
        console.log("3");
        console.log(this);
        const { BaseActions } = this.props;
        BaseActions.changeSearch(e.target.value);
    }

    render() {
        const { keyword } = this.props;
        const { handleChange } = this;
        console.log("4");
        console.log(this);
        return (
            <Input onChange={handleChange} value={keyword} placeholder="검색"/>
        );
    }
}

export default connect(
    (state) => ({
        keyword: state.base.get('keyword')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(InputContainer);