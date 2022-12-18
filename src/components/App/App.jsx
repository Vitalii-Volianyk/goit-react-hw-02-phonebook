import { Component } from 'react';
import css from './App.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  removeName(idx) {}
  addName({ name, number }) {}
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addName} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList onRemove={this.removeName} />
      </div>
    );
  }
}

export default App;
