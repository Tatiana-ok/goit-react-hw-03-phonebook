import { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  onNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.containerForm} onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            className={s.formInput}
            type="text"
            onChange={this.onNameChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            className={s.formInput}
            type="text"
            onChange={this.onNumberChange}
          />
        </label>
        <button className={s.btnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
