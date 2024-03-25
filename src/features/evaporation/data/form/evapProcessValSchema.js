import { z } from "zod";

const evapProcessFormValSchema = {
  inputTime: z.string().regex(new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"), {
    message: "El formato de hora no es correcto",
  }),
  flowMeter: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(1000000, {
      message: "El valor es demasiado grande",
    }),
  currentProcess: z.string().min(1, { message: "Elija una opción" }),
  processOrigin: z.string().min(1, { message: "Elija una opción" }),
  processDestiny: z.string().min(1, { message: "Elija una opción" }),
};

export default evapProcessFormValSchema;
