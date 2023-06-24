import { ComponentProps } from "react";
import { Form, FormControlProps, InputGroup } from "react-bootstrap";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputFieldProps {
  register: UseFormRegisterReturn;
  label?: string;
  error?: FieldError;
  inputGroupElement?: JSX.Element;
  labelClass?: string;
  infoMsgElement?: JSX.Element
  subLabel?: string,
  subLabelClass?: string,
  formContainerClass?: string,
}

export default function FormInputField({
  register,
  label,
  error,
  inputGroupElement,
  infoMsgElement,
  labelClass,
  subLabel,
  subLabelClass,
  formContainerClass = "",
  ...props
}: FormInputFieldProps & FormControlProps & ComponentProps<"input" | "textarea">) {
  return (
    <Form.Group className={`"mb-3" ${formContainerClass}`} controlId={register.name + "-input"}>
      {label && <Form.Label className={labelClass}>{label}</Form.Label>}
      {subLabel && <Form.Label className={subLabelClass}>{subLabel}</Form.Label>}
      <InputGroup hasValidation>
        <Form.Control
          {...register}
          {...props}
          isInvalid={!!error}
          aria-describedby={inputGroupElement?.props.id}
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
