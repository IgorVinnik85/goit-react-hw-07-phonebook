import { useSelector, useDispatch } from 'react-redux';
import { fillterContacts, filltered } from 'redux/slice';


export const FindContacts = () => {
  const dispatch = useDispatch();
  // const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  // console.log(filter);
 


  const onInput = event => {
    console.log(event.target.value);
    dispatch(fillterContacts(event.target.value));
  };

  // console.log(filteredContacts);
 

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Enter find name"
        value={filter}
        onChange={onInput}
      />
    </div>
  );
};
