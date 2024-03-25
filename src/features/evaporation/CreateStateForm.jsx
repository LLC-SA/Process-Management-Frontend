import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/shadcn_component/button";
import { Form } from "../../ui/shadcn_component/form";

import FormSelect from "../../ui/Form/FormSelect";
import FormInput from "../../ui/Form/FormInput";
import evapStateFormData from "./data/form/evapStateFormData";
import evapFormValSchema from "./data/form/evapStateFormValSchema";
import getObjectKeys from "../../utils/getObjectKeys";

const formEvapSchema = z.object(evapFormValSchema);

function CreateStateForm() {
  const form = useForm({
    resolver: zodResolver(formEvapSchema),
    defaultValues: getObjectKeys(evapStateFormData),
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
        {evapStateFormData.map((data) => {
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

        <Button className="ml-auto bg-slate-700" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default CreateStateForm;
