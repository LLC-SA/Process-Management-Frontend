const EVAPORATION_URL = "http://localhost:8080/v1";

export async function getEvaporationState() {
  try {
    const response = await fetch(`${EVAPORATION_URL}/evaporation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch {
    throw new Error("El estado del evaporador no se pudo cargar");
  }
}

// export async function createEditCabin(newCabin) {
//   console.log(newCabin);
//   try {
//     const response = await fetch(`${CABIN_URL}/cabins`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newCabin),
//     });

//     const data = await response.json();
//     return data;
//   } catch {
//     throw new Error("Cabin could not be created");
//   }
// }

export async function deleteEvaporationDataById(id) {
  try {
    const response = await fetch(`${EVAPORATION_URL}/evaporation/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {
    throw new Error("El estado del evaporador no se pudo borrar");
  }
}
