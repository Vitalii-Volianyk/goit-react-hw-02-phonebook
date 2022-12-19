import css from './ContactItem.module.css';
import { PropTypes } from 'prop-types';

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
