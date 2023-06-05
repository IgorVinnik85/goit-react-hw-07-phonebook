import { useEffect } from 'react';
import { FindContacts } from './FindContacts/FindContacts';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ContactsPhonebook } from './ContactsPhonebook/ContactsPhonebook';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(contacts.data);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const formSubmitHandler = ({ name, number }) => {
  //   if (contacts.find(element => element.name === name)) {
  //     alert(`${name} is alredy in contacts`);
  //     return;
  //   }

  //   dispatch(
  //     addContacts({
  //       name: name,
  //       number: number,
  //       id: nanoid(),
  //     })
  //   );
  // };

  // const findName = event => {
  //   dispatch(fillterContacts(event.target.value));
  // };

  // const filteredName = () => {
  //   return contacts.filter(el =>
  //     el.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const deleteContact = contactId => {
  //   dispatch(deleteContacts(contactId));
  // };

  // const filteredArray = filteredName();

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
      {/* <FormPhonebook onSubmit={formSubmitHandler} />
      <FindContacts onInput={findName} /> */}
      <h2>Contacts</h2>
      {/* <p>{contacts.data.join()}</p> */}
      {/* <ContactsPhonebook data={contacts.data}/> */}
    </div>
  );
};
