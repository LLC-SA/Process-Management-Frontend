import { z } from "zod";

const evapFormValSchema = {
  inputTime: z.string().regex(new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"), {
    message: "El formato de hora no es correcto",
  }),
  feedOrigin: z.string(),
  feedPh: z.coerce
    .number({
      required_error: "El pH es requerido",
      invalid_type_error: "El valor debe ser un número",
    })
    .multipleOf(0.01, {
      message: "El valor no puede tener más de 2 decimales",
    })
    .refine((num) => num >= 1 && num <= 14, {
      message: "El valor debe ser entre 1 y 14",
    }),
  feedTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  feedContainerLevel: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(200000, {
      message: "El valor es demasiado grande",
    }),

  feedSolids: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .multipleOf(0.01, {
      message: "El valor no puede tener más de 2 decimales",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  hotWaterTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  pasteurizationTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  flowRate: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(30000, {
      message: "El valor no puede ser mayor a 100",
    }),
  effectOneTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  effectTwoTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  effectThreeTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  boilerSteamPressure: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .multipleOf(0.01, {
      message: "El valor no puede tener más de 2 decimales",
    })
    .refine((num) => num >= 1 && num <= 10, {
      message: "El valor debe ser entre 1 y 14",
    }),
  evaporatorSteamPressure: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .multipleOf(0.01, {
      message: "El valor no puede tener más de 2 decimales",
    })
    .refine((num) => num >= 1 && num <= 10, {
      message: "El valor debe ser entre 1 y 14",
    }),
  coolingTowerIn: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  coolingTowerOut: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  flashTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número entero",
    })
    .int()
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  vacuumPressure: z.coerce
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
  productDestiny: z.string(),
  productSolids: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .multipleOf(0.01, {
      message: "El valor no puede tener más de 2 decimales",
    })
    .refine((num) => num >= 1 && num <= 60, {
      message: "El valor debe ser entre 1 y 14",
    }),
  createdBy: z.string().min(1, {
    message: "El valor es requerido",
  }),
};

export default evapFormValSchema;
