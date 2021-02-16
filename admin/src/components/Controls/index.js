import Input from "./Input";
import Select from "./select";

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;

    default:
      return null;
  }
}

export default FormControl;
