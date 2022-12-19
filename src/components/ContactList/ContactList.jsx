import css from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className={css.container}>
      {contacts.map(({ id, name, number }, index) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          idx={id}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default ContactList;
