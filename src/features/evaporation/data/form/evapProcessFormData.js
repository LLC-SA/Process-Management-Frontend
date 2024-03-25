const processFormData = [
  {
    name: "inputTime",
    label: "Hora",
    placeholder: "01:00",
  },
  {
    name: "flowMeter",
    label: "Caudalímetro",
    placeholder: "45895 m3",
  },
  {
    name: "currentProcess",
    label: "Proceso",
    values: [
      "Puesta en régimen",
      "Recirculación",
      "Llenado del cristalizador",
      "Inicio del CIP",
      "Finaliziación del CIP",
      "Preconcentración",
      "Pasteurización",
      "Parada de emergencia",
    ],
  },
  {
    name: "processOrigin",
    label: "Alimentación",
    values: ["S1", "S2", "S3", "S4", "S5", "S6", "CIP"],
    selectStyle: "w-32",
  },
  {
    name: "processDestiny",
    label: "Destino",
    values: [
      "S1",
      "S2",
      "S3",
      "S4",
      "S5",
      "S6",
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "CIP",
    ],
    selectStyle: "w-32",
  },
];

export default processFormData;
