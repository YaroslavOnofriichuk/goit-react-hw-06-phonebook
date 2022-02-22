import { useSelector } from 'react-redux';
import { ContactListStyled } from "./ContactList.styled";
import { ContactListItem } from "../ContactListItem/ContactListItem";

export function ContactList () {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const filterContact = () => {
    try {
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filter);
      });
    } catch { 
      return false;
    }
  };

  return (
    <>
      {filterContact() && 
      <ContactListStyled>
        {filterContact().map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
          />
        ))}
      </ContactListStyled>}
    </>
  );
};