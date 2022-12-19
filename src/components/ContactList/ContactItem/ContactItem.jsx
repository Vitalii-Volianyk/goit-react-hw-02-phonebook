import css from './ContactItem.module.css';

const ContactItem = ({ idx, name, number, onRemove }) => {
  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.button}
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
