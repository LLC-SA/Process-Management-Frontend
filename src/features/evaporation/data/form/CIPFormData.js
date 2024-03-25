const CIPFormData = [
  {
    name: "cipInputTime",
    label: "Hora",
    placeholder: "09:00",
  },
  {
    name: "cipType",
    label: "Tipo",
    values: ["Enjuague", "Alcalino", "Ácido", "Desinfección"],
  },
  {
    name: "cipProduct",
    label: "Producto",
    values: ["NaOH", "HNO3", "CH3CO3H", "H2O"],
  },
  {
    name: "cipConcentration",
    label: "[ ] %",
    placeholder: "3.5%",
  },
  {
    name: "cipTemperature",
    label: "Tª",
    placeholder: "75 ºC",
  },
  {
    name: "cipTime",
    label: "Tiempo",
    placeholder: "60' ",
  },
  {
    name: "cipFlowRate",
    label: "Caudal",
    placeholder: "24000 l/h",
  },
  {
    name: "cipVaccum",
    label: "Vacio",
    placeholder: "-400 mmHg",
  },
  {
    name: "isEvaporatorCiped",
    label: "Evaporador",
    values: ["SI", "NO"],
  },
  {
    name: "areSeparatorsCiped",
    label: "Separadores",
    values: ["SI", "NO"],
  },
  {
    name: "isFlashCiped",
    label: "Flash",
    values: ["SI", "NO"],
  },
  {
    name: "isPasteurizerCiped",
    label: "Pasteurizador",
    values: ["SI", "NO"],
  },
  {
    name: "isCoolingPlateExchangerCiped",
    label: "Placa de enfriamiento",
    values: ["SI", "NO"],
  },
  {
    name: "createdBy",
    label: "Resp",
    placeholder: "PG ",
  },
];

const filterFormData = [
  {
    name: "filterInputTime",
    label: "Hora",
    placeholder: "09:00",
  },
  {
    name: "integrityOk",
    label: "Integridad",
    values: ["BIEN", "MAL"],
  },
  {
    name: "isFilterCleaned",
    label: "Limpieza",
    values: ["SI", "NO"],
  },
  {
    name: "createdBy",
    label: "Resp",
    placeholder: "PG ",
  },
];

export { CIPFormData, filterFormData };
