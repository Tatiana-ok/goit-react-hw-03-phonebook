import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts = [], onDeleteContact }) {
  return (
    <>
      <ul className={s.listOfContact}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.itemOfListContact}>
            <p className={s.itemNameContact}>{contact.name} </p>
            <p className={s.itemNumberContact}>{contact.number}</p>
            <button
              className={s.btnOfListContact}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
