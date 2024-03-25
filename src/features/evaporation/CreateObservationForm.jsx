import { useForm } from "react-hook-form";
import { Button } from "../../ui/shadcn_component/button";
import { Form } from "../../ui/shadcn_component/form";
import FormTextArea from "../../ui/Form/FormTextArea";

function CreateObservationForm() {
  const form = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
          {[
            {
              name: "observation",
              label: "Ingrese su observación:",
              placeholder: "Se rompe B8. Se cambia eje de la bomba.",
            },
          ].map((data) => {
            {
              return (
                <FormTextArea
                  key={data.name}
                  control={form.control}
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  inputStyle={
                    "block h-[40vh] w-[25vw] pb-20 pl-1 pt-1 border border-slate-200 rounded"
                  }
                />
              );
            }
          })}

          <Button className="ml-auto mt-auto bg-slate-700" type="submit">
            Agregar
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateObservationForm;
