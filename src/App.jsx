import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
function App() {
  // це старі контакти,  може пригодяться
  const oldContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  // передав змінній масив контактів із локал сторадж
  const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
  // це стан контактів стартове значення зберігається у локальному хранилищі
  const [contacts, setContacts] = useState(savedContacts);
  // це функція додавання нових  контактів до вже існуючих
  const addContact = (value, actions) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { ...value, id: nanoid() }];
    });
    actions.resetForm();
  };
  // ефект реагує на зміни у стані контактів і перезаписує їх до локаьного сховища
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  // функція видаляє контакти із стану контактів
  const deleteContacts = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };
  // стан фільтру
  const [filtr, setFiltr] = useState("");
  const handleChangeFiltr = (e) => {
    setFiltr(e.target.value);
  };
  // порівняння двох станів і повернення нового відфільтрованого
  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filtr.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={addContact} />
      <SearchBox handleChangeFiltr={handleChangeFiltr} />
      <ContactList contacts={visibleContact} deleteContact={deleteContacts} />
    </div>
  );
}

export default App;
