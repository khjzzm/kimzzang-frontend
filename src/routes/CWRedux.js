import React from 'react';
import PaletteContainer from '../containers/PaletteContainer';
import CounterContainer from '../containers/CounterContainer';
import WaitingListContainer from '../containers/WaitingListContainer';

const CWRedux = () => {
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
};

export default CWRedux;
