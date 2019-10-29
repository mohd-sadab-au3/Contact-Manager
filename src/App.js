import React from 'react';
import Header from './components/Header/Header';
import Contacts from './containers/Contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './store/Provider/Provider';


function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
