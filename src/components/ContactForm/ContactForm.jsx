import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };
  handleChange = e => {
    const { name, value } = e.curentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.eventPreventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onInput={this.setNumber}
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
