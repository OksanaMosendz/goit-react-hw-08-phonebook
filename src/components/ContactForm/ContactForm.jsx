import React, { useState } from 'react';
import { Form, Label } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../redux/phonebook/phonebook-selectors';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { getUserToken } from '../../redux/auth/auth-selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getItems);
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  const isInList =
    items.length > 0
      ? items.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      : false;

  const formSubmit = e => {
    e.preventDefault();
    isInList
      ? alert(name + ' is already in contacts.')
      : dispatch(addContact({ name, number }, token), [dispatch]);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={formSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>

      <Label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
};
