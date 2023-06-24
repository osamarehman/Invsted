import { ComponentProps } from "react";
import { Form, FormControlProps, InputGroup } from "react-bootstrap";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputFieldProps {
  register: UseFormRegisterReturn;
  label?: string;
  error?: FieldError;
  inputGroupElement?: JSX.Element;
  type?: FormCheckType,
  labelClass?: string;
  infoMsgElement?: JSX.Element;
  checkBoxStyle?: string,
}

export default function FormCheckboxField({
  register,
  label,
  error,
  inputGroupElement,
  infoMsgElement,
  labelClass,
  type = "checkbox",
  checkBoxStyle = "",
  ...props
}: FormInputFieldProps & FormControlProps & ComponentProps<"input">) {
  return (
    <Form.Group className={checkBoxStyle} controlId={register.name + "-input"}>
      <InputGroup hasValidation>
        <Form.Check
          type={type}
          label={label}
          {...props}
        />
        {inputGroupElement}
        <Form.Control.Feedback type="invalid">
          {error?.message}
        </Form.Control.Feedback>
      </InputGroup>
      {infoMsgElement}
    </Form.Group>
  );
}
