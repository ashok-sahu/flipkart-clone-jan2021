import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  const {
    type,
    label,
    placeholder,
    errorMessage,
    onChange,
    value,
    name,
  } = props;
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        {...props}
      />
      <Form.Text className="text-muted">{errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Input;
