import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/shadcn_component/button";
import { Form } from "../../ui/shadcn_component/form";

import FormSelect from "../../ui/Form/FormSelect";
import FormInput from "../../ui/Form/FormInput";
import evapProcessFormData from "./data/form/evapProcessFormData";
import getObjectKeys from "../../utils/getObjectKeys";
import evapProcessFormValSchema from "./data/form/evapProcessValSchema";

const formEvapProcessSchema = z.object(evapProcessFormValSchema);

function CreateProcessForm() {
  const form = useForm({
    resolver: zodResolver(formEvapProcessSchema),
    defaultValues: getObjectKeys(evapProcessFormData),
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
        {evapProcessFormData.map((data) => {
          if ("values" in data) {
            return (
              <FormSelect
                key={data.name}
                control={form.control}
                name={data.name}
                label={data.label}
                selectStyle={"w-40"}
                errorStyle={"w-36 text-xs"}
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
                errorStyle={"w-36 text-xs"}
              />
            );
          }
        })}

        <Button
          className="ml-auto mt-4
        bg-slate-700"
          type="submit"
        >
          Agregar Proceso
        </Button>
      </form>
    </Form>
  );
}

export default CreateProcessForm;
