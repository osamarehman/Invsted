import { ComponentProps } from "react";
import { Form, InputGroup, FormControlProps } from "react-bootstrap";

interface IFormSelctField {
  options: string[];
  label?: string;
  labelClass?: string;
  infoMsgElement?: JSX.Element;
}

const FormSelectField = ({
  options,
  label = "",
  labelClass,
  infoMsgElement,
  ...props
}: IFormSelctField & FormControlProps & ComponentProps<"select">) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label className={labelClass}>{label}</Form.Label>}
      <InputGroup hasValidation>
        <Form.Select aria-label="Default select example" {...props}>
          <option>I am a..</option>
          {options.map((value: string) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </Form.Select>
      </InputGroup>
      {infoMsgElement}
    </Form.Group>
  );
};

export default FormSelectField;
