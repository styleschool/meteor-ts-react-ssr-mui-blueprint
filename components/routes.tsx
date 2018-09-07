import * as React from 'react';
import { Route, Switch } from 'react-router';
import About from './pages/about';
import Contacts from './pages/contacts';
import Card from './pages/card';

export class Routes extends React.Component {
  render() {
    return <div>
      <Switch>
        <Route path="/about" component={About} />
        
        <Route path="/contacts" component={Contacts}/>
        <Route path="/card" component={Card}/>
      </Switch>
    </div>;
  }
}
