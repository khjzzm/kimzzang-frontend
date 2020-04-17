import React from 'react';
import _ from 'lodash';
import {Route, Switch, withRouter} from 'react-router-dom';
import Router from './modules/router';
import NotFound from './pages/404';

class App extends React.Component {
    // handleMouseOver = () => {
    //     About.preload();
    // };

    componentDidMount() {
        console.log("start app");
    }

    render() {
        return (
            <Switch>
                {
                    _.map(Router, (route, index) => {
                        return (<Route key={index}
                                       path={route.path}
                                       exact={route.exact}
                                       render={() => {
                                           return <route.main/>;
                                       }}/>)
                    })
                }
                <Route render={() => <NotFound/>}/>
            </Switch>
        );
    }
}

export default withRouter(App);