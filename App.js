import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import MainSite from './src/components/mainSite';



class App extends Component{
    render(){
        return (
        <HashRouter>
            <Switch>
                <Route exact to ='/' component={MainSite} />
            </Switch>
        </HashRouter>
        )
    }
}

export default App;
