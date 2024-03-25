import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/shadcn_component/form";

function FormTextArea({
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
            <textarea
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

export default FormTextArea;
