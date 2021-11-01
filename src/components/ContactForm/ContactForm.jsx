import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
    <Form onSubmit={formSubmit} className="w-50 justify-content-center ">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Form.Group>

      <Button
        className="d-inline-flex justify-self-center"
        variant="primary"
        type="submit"
      >
        Add contact
      </Button>
    </Form>
  );
};
