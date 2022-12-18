// import css from './ContactItem.module.css';

const ContactItem = ({ idx, name, number, onRemove }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => {
          onRemove(idx);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default ContactItem;
