import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/shadcn_component/form";
import { Input } from "../../ui/shadcn_component/input";

function FormInput({
  control,
  name,
  label,
  disabled = false,
  placeholder = "",
  labelStyle,
  inputStyle,
  errorStyle,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={labelStyle}>{label}</FormLabel>
          <FormControl>
            <Input
              disabled={disabled}
              placeholder={placeholder}
              {...field}
              className={inputStyle}
            />
          </FormControl>
          <FormMessage className={errorStyle} />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
