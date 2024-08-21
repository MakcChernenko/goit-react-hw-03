import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={styles.contactItem} key={contact.id}>
            <Contact data={contact} deleteContact={deleteContact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
