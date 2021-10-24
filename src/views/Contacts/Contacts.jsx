import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

export const Contacts = () => (
  <>
    <h2>Contacts</h2>
    <ContactForm />
    <Filter />
    <ContactList />
  </>
);
