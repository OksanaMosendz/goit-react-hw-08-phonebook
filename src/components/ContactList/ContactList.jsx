import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';
import { getUserToken } from '../../redux/auth/auth-selectors';
import { ListGroup, Button } from 'react-bootstrap';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts(token)), [token, dispatch]);

  return (
    filteredContacts.length > 0 && (
      <ListGroup>
        {filteredContacts.map(contact => (
          <ListGroup.Item
            key={contact.id}
            className="d-flex justify-content-between  align-items-center"
          >
            <p className="d-inline-flex m-0 me-2">
              {contact.name}:{contact.number}
            </p>
            <Button
              id={contact.id}
              variant="outline-primary"
              type="button"
              onClick={e =>
                dispatch(deleteContact(e.target.id, token), [dispatch])
              }
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  );
};
