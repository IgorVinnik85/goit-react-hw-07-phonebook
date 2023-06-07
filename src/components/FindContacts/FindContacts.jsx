import { useSelector, useDispatch } from 'react-redux';
import { fillterContacts } from 'redux/slice';


export const FindContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
 
  const onInput = event => {
    console.log(event.target.value);
    dispatch(fillterContacts(event.target.value));
  };

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
