import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { deleteItems } from "../../redux/phoneBookSlice";

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItems(id));
  };

  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
};