import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import initialContacts from '../ContactsList/initialContacts.json';
import s from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitHandler = data => {
    !contacts.some(({ name }) => name.includes(data.name))
      ? setContacts(state => [data, ...contacts])
      : alert(`${data.name} is already in contacts`);
  };

  const onFilterName = ({ currentTarget: { value } }) => {
    setFilter(value);
  };

  const getFilterName = () => {
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact),
    );
  };

  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Section>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={onSubmitHandler} />
      </Section>
      <Section>
        <h2 className={s.subtitle}>Contacts</h2>
        <Filter filter={filter} onFilterName={onFilterName} />
        <ContactsList
          // contacts={contacts}
          contacts={getFilterName()}
          onDelete={deleteContact}
        />
      </Section>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default App;
