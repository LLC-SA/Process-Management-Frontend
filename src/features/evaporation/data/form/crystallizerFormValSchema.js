import { z } from "zod";

const crystallizerFormValSchema = {
  crystNumber: z.string().min(1, { message: "Debe elegir una opción" }),
  checked: z.string().min(1, { message: "Debe elegir una opción" }),
  productType: z.string().min(1, { message: "Debe elegir una opción" }),
  batchNumber: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(9999, {
      message: "El valor es demasiado grande",
    }),
  d90batch: z.string().min(1, { message: "Debe elegir una opción" }),
  feedOrigin: z.string().min(1, { message: "Debe elegir una opción" }),
  pastValve: z.string().min(1, { message: "Debe elegir una opción" }),
  productpH: z.coerce
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
  productAcidity: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(200, {
      message: "El valor no puede ser mayor a 200",
    }),
};

const crystallizerDetailsValSchema = {
  inputTime: z.string().regex(new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"), {
    message: "El formato de hora no es correcto",
  }),
  pastTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  currentSolids: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
  outputTemp: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(100, {
      message: "El valor no puede ser mayor a 100",
    }),
};

const crystallizerEndValSchema = {
  productVolume: z.coerce
    .number({
      invalid_type_error: "El valor debe ser un número",
    })
    .gte(1, {
      message: "El valor no puede ser menor a 1",
    })
    .lte(30000, {
      message: "El valor no puede ser mayor a 30000",
    }),
  createdBy: z.string().min(1),
};

//*--*//

export {
  crystallizerFormValSchema,
  crystallizerDetailsValSchema,
  crystallizerEndValSchema,
};
