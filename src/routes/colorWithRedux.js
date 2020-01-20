import React, {Component} from 'react';
import PaletteContainer from '../containers/PaletteContainer';
import CounterContainer from '../containers/CounterContainer';
import WaitingListContainer from '../containers/WaitingListContainer';

class ColorWithRedux extends Component {
    render() {
        return (
            <div>
                {/*<Palette selected="red" />*/}
                <PaletteContainer />
                {/*<Counter value={0} color="red" />*/}
                <CounterContainer />
                {/*<WaitingList />*/}
                <WaitingListContainer /> {/* **** 교체하기 */}
            </div>
        );
    }
}

export default ColorWithRedux;