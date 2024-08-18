import { useSelector } from "react-redux";
import Contact from "./Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../redux/contacts/selectors";
import css from "../components/css/ContactList.module.css";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div>
      {isError ? (
        <p>{isError}</p>
      ) : visibleContacts.length > 0 ? (
        <ul className={css.list}>
          {visibleContacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      ) : (
        !isLoading && <p>List is empty</p>
      )}
    </div>
  );
};

export default ContactList;
