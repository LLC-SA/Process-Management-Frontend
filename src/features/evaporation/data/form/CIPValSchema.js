import { z } from "zod";

const CIPFormValSchema = {
  cipInputTime: z
    .string()
    .regex(new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"), {
      message: "El formato de hora no es correcto",
    }),
  cipType: z.string().min(1, { message: "Debe elegir una opción" }),
  cipProduct: z.string().min(1, { message: "Debe elegir una opción" }),
  cipConcentration: z.coerce
    .number({
      required_error: "El pH es requerido",
      invalid_type_error: "El valor debe ser un número",
    })
    .multipleOf(0.01, {
      message: "El valor no puede tener más de 2 decimales",
    })
    .refine((num) => num >= 1 && num <= 5, {
      message: "El valor debe ser entre 1 y 5",
    }),
  cipTemperature: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  cipTime: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(1000, {
      message: "El valor no puede ser mayor a 1000",
    }),
  cipFlowRate: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(50000, {
      message: "El valor no puede ser mayor a 50000",
    }),
  cipVaccum: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(-720, {
      message: "El valor no puede ser menor a -720",
    })
    .lte(-1, {
      message: "El valor no puede mayor que -1",
    }),
  isEvaporatorCiped: z.string().min(1, { message: "Debe elegir una opción" }),
  areSeparatorsCiped: z.string().min(1, { message: "Debe elegir una opción" }),
  isFlashCiped: z.string().min(1, { message: "Debe elegir una opción" }),
  isPasteurizerCiped: z.string().min(1, { message: "Debe elegir una opción" }),
  isCoolingPlateExchangerCiped: z
    .string()
    .min(1, { message: "Debe elegir una opción" }),
  createdBy: z.string().min(1, {
    message: "El valor es requerido",
  }),
};

const filterFormValSchema = {
  filterInputTime: z
    .string()
    .regex(new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"), {
      message: "El formato de hora no es correcto",
    }),
  integrityOk: z.string().min(1, { message: "Debe elegir una opción" }),
  isFilterCleaned: z.string().min(1, { message: "Debe elegir una opción" }),
  createdBy: z.string().min(1, {
    message: "El valor es requerido",
  }),
};

export { CIPFormValSchema, filterFormValSchema };
