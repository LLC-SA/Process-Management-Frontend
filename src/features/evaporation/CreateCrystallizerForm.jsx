import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/shadcn_component/button";
import { Form } from "../../ui/shadcn_component/form";

import FormSelect from "../../ui/Form/FormSelect";
import FormInput from "../../ui/Form/FormInput";
import {
  crystallizerFormData,
  crystallizerTableData,
  crystallizerEndData,
} from "./data/form/crystallizerFormData";
import getObjectKeys from "../../utils/getObjectKeys";
import {
  crystallizerFormValSchema,
  crystallizerDetailsValSchema,
  crystallizerEndValSchema,
} from "./data/form/crystallizerFormValSchema";
import DataTable from "../../ui/DataTable";
import crystallizerColumns from "./data/columns/crystallizerColumns";
import { useState } from "react";

const formCrystallizerSchema = z.object(crystallizerFormValSchema);
const formCrystallizerDetailSchema = z.object(crystallizerDetailsValSchema);
const formCrystallizerEndSchema = z.object(crystallizerEndValSchema);

function CreateCrystallizerForm() {
  const [isLiberated, setIsLiberated] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const formSetCryst = useForm({
    resolver: zodResolver(formCrystallizerSchema),
    defaultValues: getObjectKeys(crystallizerFormData),
  });

  const formSetCrystDetails = useForm({
    resolver: zodResolver(formCrystallizerDetailSchema),
    defaultValues: getObjectKeys(crystallizerTableData),
  });

  const formSetCrystEnd = useForm({
    resolver: zodResolver(formCrystallizerEndSchema),
    defaultValues: getObjectKeys(crystallizerEndData),
  });

  function onSubmitCryst(data) {
    setIsLiberated(true);
    console.log(data);
  }

  function onSubmitDetail(data) {
    console.log(data);
  }

  function onSubmitEnd(data) {
    console.log(data);
  }

  return (
    <>
      <Form {...formSetCryst}>
        <form
          onSubmit={formSetCryst.handleSubmit(onSubmitCryst)}
          className="flex flex-wrap gap-3"
        >
          {crystallizerFormData.map((data) => {
            if ("values" in data) {
              return (
                <FormSelect
                  key={data.name}
                  control={formSetCryst.control}
                  name={data.name}
                  label={data.label}
                  disabled={isLiberated}
                  selectStyle={"w-40"}
                  errorStyle={"w-32 text-xs"}
                  values={data.values}
                />
              );
            } else {
              return (
                <FormInput
                  key={data.name}
                  control={formSetCryst.control}
                  name={data.name}
                  label={data.label}
                  disabled={isLiberated}
                  placeholder={data.placeholder}
                  inputStyle={"w-40"}
                  errorStyle={"w-32 text-xs"}
                />
              );
            }
          })}

          <Button
            className="ml-auto mt-auto bg-slate-700"
            type="submit"
            disabled={isLiberated}
          >
            Liberar
          </Button>
        </form>
      </Form>

      <div className="mx-auto w-10/12 pt-6">
        <DataTable
          columns={crystallizerColumns}
          data={[
            {
              inputTime: "22:00",
              pastTemp: 75,
              currentSolids: 50,
              coolingTemperature: 10,
            },
            {
              inputTime: "22:00",
              pastTemp: 75,
              currentSolids: 50,
              coolingTemperature: 10,
            },
          ]}
        />

        <Form {...formSetCrystDetails}>
          <form
            onSubmit={formSetCrystDetails.handleSubmit(onSubmitDetail)}
            className="flex gap-3 pt-6"
          >
            {crystallizerTableData.map((data) => {
              return (
                <FormInput
                  key={data.name}
                  control={formSetCrystDetails.control}
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  disabled={!isLiberated}
                  inputStyle={""}
                  errorStyle={"w-32 text-xs"}
                />
              );
            })}

            <Button
              className="ml-auto mt-auto bg-slate-700"
              type="submit"
              disabled={!isLiberated}
            >
              Agregar
            </Button>
          </form>
        </Form>

        <Form {...formSetCrystEnd}>
          <form
            onSubmit={formSetCrystEnd.handleSubmit(onSubmitEnd)}
            className="flex gap-3 pt-6"
          >
            {crystallizerEndData.map((data) => {
              return (
                <FormInput
                  key={data.name}
                  control={formSetCrystDetails.control}
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  disabled={!isLiberated}
                  inputStyle={"flex-1"}
                  errorStyle={"w-32 text-xs"}
                />
              );
            })}

            <Button
              className="ml-auto mt-auto bg-slate-700"
              type="submit"
              disabled={!isLiberated}
            >
              Finalizar cristalizador
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default CreateCrystallizerForm;
