import { ContactForm }from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Section } from "./Section/Section.styled";

export function App () {

    return (
      <Section>
        <p>Phonebook</p>
        <ContactForm />
        <p>Contacts</p>
        <Filter />
        <ContactList />
      </Section>
    );
};