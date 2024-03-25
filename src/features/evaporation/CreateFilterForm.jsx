import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/shadcn_component/button";
import { Form } from "../../ui/shadcn_component/form";

import FormSelect from "../../ui/Form/FormSelect";
import FormInput from "../../ui/Form/FormInput";
import getObjectKeys from "../../utils/getObjectKeys";
import { filterFormData } from "./data/form/CIPFormData";
import { filterFormValSchema } from "./data/form/CIPValSchema";

const formFilterSchema = z.object(filterFormValSchema);

function CreateFilterForm() {
  const form = useForm({
    resolver: zodResolver(formFilterSchema),
    defaultValues: getObjectKeys(filterFormData),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap gap-3"
      >
        {filterFormData.map((data) => {
          if ("values" in data) {
            return (
              <FormSelect
                key={data.name}
                control={form.control}
                name={data.name}
                label={data.label}
                selectStyle={"w-40"}
                errorStyle={"w-32 text-xs"}
                values={data.values}
              />
            );
          } else {
            return (
              <FormInput
                key={data.name}
                control={form.control}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
                inputStyle={"w-40"}
                errorStyle={"w-32 text-xs"}
              />
            );
          }
        })}

        <Button className="ml-auto mt-auto bg-slate-700" type="submit">
          Registrar
        </Button>
      </form>
    </Form>
  );
}

export default CreateFilterForm;
