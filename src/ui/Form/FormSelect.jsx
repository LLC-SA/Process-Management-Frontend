import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/shadcn_component/form";
import SelectInput from "./SelectInput";

const defaultStyle = `flex h-10
                      rounded-md border border-slate-200 bg-white
                      px-3 py-2 text-sm
                      ring-offset-white
                      file:border-0 file:bg-transparent file:text-sm file:font-medium
                      placeholder:text-slate-500
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
                      disabled:cursor-not-allowed disabled:opacity-50
                      dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300`;

function FormSelect({
  control,
  name,
  label,
  disabled,
  values,
  selectMessage,
  labelStyle,
  selectStyle,
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
            <SelectInput
              selectMessage={selectMessage}
              selectStyle={`${defaultStyle} ${selectStyle}`}
              field={field}
              disabled={disabled}
              values={values}
            />
          </FormControl>
          <FormMessage className={errorStyle} />
        </FormItem>
      )}
    />
  );
}

export default FormSelect;
