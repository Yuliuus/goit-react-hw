import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Contact name is too short!")
      .max(50, "Contact name is too long!")
      .required("This field is required"),
    number: Yup.string()
      .min(3, "Phone number is too short!")
      .max(50, "Phone number is max too long!")
      .required("This field is required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.group}>
          <label htmlFor={numberFieldId} className={css.label}>
            Number
          </label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
