import { nanoid } from "nanoid";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setItems } from "../../redux/phoneBookSlice";
import { Form } from "./ContactForm.styled";

export function ContactForm () {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newName = form.elements.name.value;
    const newNumber = form.elements.number.value;

    const newContact = {
      "name": newName,
      "number": newNumber,
      "id": nanoid(),
    };

    if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )) {
      window.alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(setItems(newContact));
    }

    form.reset();
  };

  const formId = nanoid();

    return (
      <Form onSubmit={handleSubmit} htmlFor={formId}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </Form>
    );
};