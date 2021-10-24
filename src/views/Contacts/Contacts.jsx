import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

export const Contacts = () => (
  <>
    <h1>Contacts</h1>
    <ContactForm />
    <Filter />
    <ContactList />
  </>
);
