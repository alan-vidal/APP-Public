// INPUT: A DATE IN STRING
// OUTPUT: QUERY URL

let ESTADO: string = "publicada";
//const TICKET: string = import.meta.env.PUBLIC_TICKET;
const TICKET: string = "F8537A18-6766-4DEF-9E59-426B4FEE2844";

export let fullUrlDate = function (date: string) {
  const apiUrl =
    "https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json";
  const queryParams = {
    fecha: date,
    estado: ESTADO,
    ticket: TICKET,
  };
  const queryString = new URLSearchParams(queryParams).toString();
  const fullUrl = `${apiUrl}?${queryString}`;
  return fullUrl;
};
