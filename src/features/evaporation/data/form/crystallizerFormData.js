const crystallizerFormData = [
  {
    name: "crystNumber",
    label: "Cristalizador",
    values: ["C1", "C2", "C3", "C4", "C5", "C6"],
  },
  {
    name: "checked",
    label: "Desinfectado",
    values: ["SI", "NO"],
  },
  {
    name: "productType",
    label: "Tipo",
    values: ["SPD", "STC", "D90", "LPD", "STCPA", "D70"],
  },
  {
    name: "batchNumber",
    label: "Batch nº",
    placeholder: "896",
  },
  {
    name: "d90batch",
    label: "Lotes",
    placeholder: "567 - 572",
  },
  {
    name: "feedOrigin",
    label: "Origen",
    values: ["S1", "S2", "S3", "S4", "S5", "S6"],
  },
  {
    name: "pastValve",
    label: "Válvula Diversora",
    values: ["OK", "NO FUNCIONA"],
  },
  {
    name: "productpH",
    label: "pH",
    placeholder: "6.03",
  },

  {
    name: "productAcidity",
    label: "Acidez",
    placeholder: "58",
  },
];

const crystallizerTableData = [
  {
    name: "inputTime",
    label: "Hora",
    placeholder: "Hora",
  },
  {
    name: "pastTemp",
    label: "Tª Past",
    placeholder: "75 ºC",
  },
  {
    name: "currentSolids",
    label: "ºBx",
    placeholder: "50 ºBx",
  },
  {
    name: "coolingTemperature",
    label: "Tª Salida",
    placeholder: "10 ºC",
  },
];

const crystallizerEndData = [
  {
    name: "productVolume",
    label: "Volumen",
    placeholder: "17000",
  },
  {
    name: "createdBy",
    label: "Responsable",
    placeholder: "PG",
  },
];

export { crystallizerFormData, crystallizerTableData, crystallizerEndData };
