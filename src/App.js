import React from 'react';
import { login, saveProperty, saveUser, filterProperties } from './api';
import './styles/app.scss';

function App() {

  function saveNewUser() {
    saveUser({
      name: 'Rafael',
      surname: 'Tome de Souza',
      email: 'rafaeltomesouza@gmail.com'
    }).then(() => console.log('salvo'));
  }

  function saveNewProperty() {
    saveProperty({
      address: 'Rua Guatemala, 330',
      city: 'Araçatuba',
      country: 'Brasil',
      description: 'Lugar longe daqui',
      user: 'rafaeltomesouza@gmail.com'
    }).then(() => console.log('salvo'));
  }

  function showAll() {
    filterProperties('Araçatuba');
  }

  return (
    <div className="App">
      <div>
        <button onClick={login}>Sign-in</button>
      </div>
      <div>
        <button onClick={saveNewUser}>Save user</button>
      </div>
      <div>
        <button onClick={saveNewProperty}>Save property</button>
      </div>
      <div>
        <button onClick={showAll}>Show all properties</button>
      </div>
    </div>
  );
}

export default App;
