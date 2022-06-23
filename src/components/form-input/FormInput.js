import {
  shrinkLabelStyles,
  Group,
  FormInputLabel,
  Input,
} from "./form.input.style.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label ? (
        <FormInputLabel
          shrink={otherProps.value.length}
          className={`${
            otherProps.value.length > 0 ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
