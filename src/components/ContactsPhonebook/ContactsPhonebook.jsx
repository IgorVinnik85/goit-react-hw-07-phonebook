// import PropTypes from 'prop-types';
import css from './ContactsPhonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';

export const ContactsPhonebook = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  console.log(contacts);

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(el => {
        return (
          <li className={css.item} key={el.id}>
            <span> {el.name}</span>
            <span> {el.number}</span>
            <button
              className={css.btn}
              type="button"
              onClick={() => handleDelete(el.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
