import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { editContact } from "../redux/contacts/operations";
import * as Yup from "yup";

const EditContactForm = ({ handleEditClose, id, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (values.name !== name || values.number !== number) {
      dispatch(editContact({ id, ...values }));
    }
    handleEditClose();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Name must be at most 50 characters!")
      .test(
        "trim",
        "Name cannot be only spaces!",
        (value) => value.trim() !== ""
      ),
    number: Yup.string().required("Required!"),
  });

  return (
    <Formik
      initialValues={{
        name: name,
        number: number,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <Field
            name="name"
            id="name"
            type="text"
            placeholder="Type contact name"
          />
          <Field
            name="number"
            id="number"
            type="text"
            placeholder="Type contact number"
          />
        </div>
        <button type="submit"></button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
