import React from 'react';
import Header from './components/Header/Header';
import Contacts from './containers/Contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './store/Provider/Provider';
import AddContact from './containers/Contact/AddContact/AddContact';


function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
