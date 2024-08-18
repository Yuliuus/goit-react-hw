import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import { useState } from "react";
import EditContactForm from "./EditContactForm";
import { IoMdPerson } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import css from "../components/css/Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditContactForm
          handleEditClose={handleEditClose}
          id={id}
          name={name}
          number={number}
        />
      ) : (
        <div className={css.contactWrap}>
          <div className={css.wrap}>
            <div className={css.line}>
              <IoMdPerson size="22" className={css.icon} />
              <p className={css.contactText}>{name}</p>
            </div>
            <div className={css.line}>
              <AiFillPhone size="22" className={css.icon} />
              <p className={css.contactText}>{number}</p>
            </div>
          </div>
          <button className={css.button} onClick={() => handleDelete(id)}>
            Delete
          </button>
          <button className={css.button} onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
