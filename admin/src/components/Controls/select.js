import React from "react";
import { Form } from "react-bootstrap";

const Select = (props) => {
  const { label, value, onChange, placeholder, options } = props;
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <select
        className="form-control form-control-sm"
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.length > 0
          ? options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            ))
          : null}
      </select>
    </Form.Group>
  );
};

export default Select;
