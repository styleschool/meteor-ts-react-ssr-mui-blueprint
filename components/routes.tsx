import * as React from 'react';
import { Route, Switch } from 'react-router';
import About from './pages/about';
import Contacts from './pages/contacts';
import CardContacts from './pages/card_contacts';
import CardDetails from './pages/card_details';

export class Routes extends React.Component {
  render() {
    return <div>
      <Switch>
        <Route path="/about" component={About} />
        
        <Route path="/contacts" component={Contacts}/>
        <Route path="/card_contacts" component={CardContacts}/>
        <Route path="/card_details" component={CardDetails}/>
      </Switch>
    </div>;
  }
}
