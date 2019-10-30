import React from 'react';
import Header from './components/Header/Header';
import Contacts from './containers/Contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './store/Provider/Provider';
import AddContact from './containers/Contact/AddContact/AddContact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
