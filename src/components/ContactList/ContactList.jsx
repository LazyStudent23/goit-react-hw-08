import {useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";

import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice/contactsSlice.js";

const ContactList = () => {
  const searchedContacts = useSelector(selectFilteredContacts);
  return (
    <>
      {searchedContacts.length === 0 && <h3>Your contact list is empty</h3>}

      <ul className={styles.user_list}>
        {searchedContacts.map((user) => {
          return (
            <li className={styles.user_card} key={user.id}>
              <Contact user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
