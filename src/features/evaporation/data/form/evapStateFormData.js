const evapStateFormData = [
  {
    name: "inputTime",
    label: "Hora",
    placeholder: "22:00",
  },
  {
    name: "feedOrigin",
    label: "Alimentación",
    values: ["S1", "S2", "S3", "S4", "S5", "S6"],
  },
  {
    name: "feedPh",
    label: "pH",
    placeholder: "6.42",
  },
  {
    name: "feedTemp",
    label: "Tª ingreso",
    placeholder: "10 ºC",
  },
  {
    name: "feedContainerLevel",
    label: "Nivel",
    placeholder: "24000 l",
  },
  {
    name: "feedSolids",
    label: "ºBx in",
    placeholder: "17 ºBx",
  },
  {
    name: "hotWaterTemp",
    label: "Tª H2O",
    placeholder: "85 ºC",
  },
  {
    name: "pasteurizationTemp",
    label: "Tª Past",
    placeholder: "73 ºC",
  },
  {
    name: "flowRate",
    label: "Caudal",
    placeholder: "18000 l/h",
  },
  {
    name: "effectOneTemp",
    label: "Tª E1",
    placeholder: "70 ºC",
  },
  {
    name: "effectTwoTemp",
    label: "Tª E2",
    placeholder: "60 ºC",
  },
  {
    name: "effectThreeTemp",
    label: "Tª E3",
    placeholder: "50 ºC",
  },
  {
    name: "boilerSteamPressure",
    label: "P Caldera",
    placeholder: "9.5 kg/cm2",
  },
  {
    name: "evaporatorSteamPressure",
    label: "P Termo",
    placeholder: "7.0 kg/cm2",
  },
  {
    name: "coolingTowerIn",
    label: "Tª Torre entrada",
    placeholder: "30 ºC",
  },
  {
    name: "coolingTowerOut",
    label: "Tª Torre salida",
    placeholder: "45 ºC",
  },
  {
    name: "flashTemp",
    label: "Tª Flash",
    placeholder: "40 ºC",
  },
  {
    name: "vacuumPressure",
    label: "Vacio",
    placeholder: "-650 mmHg",
  },
  {
    name: "productDestiny",
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
    ],
  },
  {
    name: "productSolids",
    label: "ºBx out",
    placeholder: "50 ºBx",
  },
  {
    name: "createdBy",
    label: "Responsable",
    placeholder: "PG",
  },
];

export default evapStateFormData;
