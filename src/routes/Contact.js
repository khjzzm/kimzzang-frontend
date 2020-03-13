import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from '../components/molecules/Container';
import ViewSelectorContainer from '../containers/ViewSelectorContainer';
import InputContainer  from '../containers/InputContainer';
import FavoriteListContainer from '../containers/FavoriteListContainer';

class App extends Component {
    render() {
        // 레퍼런스 준비
        const { view } = this.props;
        return (
            <div>
                <ViewSelectorContainer/>

                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>
                    <FavoriteListContainer/>
                </Container>
                <Container visible={view==='list'}>
                    <InputContainer/>
                    {/* ContactListContainer */}
                </Container>

                {/* ContactModalContainer */}
                {/* FloatingButtonContainer */}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        view: state.base.get('view'),
    })
)(App);