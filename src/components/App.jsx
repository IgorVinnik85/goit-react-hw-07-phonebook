import { useEffect } from 'react';
import { FindContacts } from './FindContacts/FindContacts';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ContactsPhonebook } from './ContactsPhonebook/ContactsPhonebook';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  // console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'inline-flex',
        padding: 20,
        flexDirection: 'column',
        border: '2px solid black',
      }}
    >
      <h1>Phonebook</h1>
      <FormPhonebook  />
      <FindContacts />
      <h2>Contacts</h2>
      {contacts && <ContactsPhonebook  />}
    </div>
  );
};
