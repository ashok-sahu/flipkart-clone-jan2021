import { useState } from "react";
import { Form } from "react-bootstrap";

const UseForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleInputChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setValues((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const ResetForm = () =>{
    setValues(initialValues)
  }

  return {
    values,
    handleInputChange,
    handleSubmit,
    ResetForm
  };
};

const Formik = (props) => {
  const { children, ...other } = props;
  return (
    <Form autoComplete="off" {...other}>
      {children}
    </Form>
  );
};

export { Formik, UseForm };
