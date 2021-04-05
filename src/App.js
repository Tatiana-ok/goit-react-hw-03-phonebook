import './App.css';
import s from './App.module.css';
import { Component } from 'react';
import shortid from 'shortid';
import contacts from './contacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contactNew => {
    if (
      this.state.contacts.find(contact =>
        contact.name.toLowerCase().includes(contactNew.name.toLowerCase()),
      )
    ) {
      alert(`${contactNew.name} is already in contacts`);
    } else {
      const newContact = {
        id: shortid.generate(),
        name: contactNew.name,
        number: contactNew.number,
      };
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
      filter: '',
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normolizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;
