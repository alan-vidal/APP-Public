const currentDate = new Date().toISOString().split("T")[0];
const today = currentDate.split("-");
const todayYear = today[0].toString();
const lasttwoStr =
  todayYear.charAt(todayYear.length - 2) +
  todayYear.charAt(todayYear.length - 1);

const OPCODE: string = "O1" + lasttwoStr.toString();
const AIF: string = "AIF";

interface Contrato {
  CodigoExterno: string;
  Nombre: string;
  CodigoEstado: number;
  FechaCierre: string;
}

interface Consulta {
  Cantidad: number;
  FechaCreacion: string;
  Version: string;
  Listado: Contrato[];
}

export let licitOPDay = async function (fullUrl: string) {
  const request = new Request(fullUrl);
  let data;

  try {
    const response = await fetch(request);
    data = await response.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("There was a SyntaxError", error);
    } else {
      console.log("There was an error", error);
    }
  }

  let listaObras: Contrato[] = [];
  if (data) {
    let consulta: Consulta = data;
    let cantidad: number = consulta.Cantidad;

    for (let i = 0; i < cantidad; i++) {
      let codigo: string = consulta.Listado[i].CodigoExterno;
      let codigoOP = codigo.split("-");

      if (OPCODE == codigoOP.slice(-1)[0]) {
        listaObras.push({
          CodigoExterno: consulta.Listado[i].CodigoExterno,
          Nombre: consulta.Listado[i].Nombre.toUpperCase(),
          CodigoEstado: consulta.Listado[i].CodigoEstado,
          FechaCierre: consulta.Listado[i].FechaCierre,
        });
      }
    }
    console.log("CONSULTA OBRAS 0124: ", listaObras);
    return listaObras;
  }
  return listaObras;
};

export let licitAIFDay = function (contratos: Contrato[]) {
  const cantidadOP: number = contratos.length;
  let listaAIF: Contrato[] = [];
  for (let j = 0; j < cantidadOP; j++) {
    let nombre: string = contratos[j].Nombre.split(" ")[0];
    if (
      nombre.includes("AIT") ||
      nombre.includes(AIF) ||
      nombre.includes("ASESOR") ||
      nombre.includes("ASES.") ||
      nombre.includes("ASE.")
    ) {
      listaAIF.push({
        CodigoExterno: contratos[j].CodigoExterno,
        Nombre: contratos[j].Nombre.toUpperCase(),
        CodigoEstado: contratos[j].CodigoEstado,
        FechaCierre: contratos[j].FechaCierre,
      });
    }
  }
  //console.log("CONSULTA AIF: ", listaAIF);
  return listaAIF;
};
