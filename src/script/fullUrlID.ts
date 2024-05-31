// INPUT: A ID
// OUTPUT: QUERY URL
const TICKET: string = import.meta.env.SECRET_TICKET;

export let fullUrlID = function (id: string) {
  const apiUrl =
    "https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json";
  const queryParams = {
    codigo: id,
    ticket: TICKET,
  };
  const queryString = new URLSearchParams(queryParams).toString();
  const fullUrl = `${apiUrl}?${queryString}`;
  return fullUrl;
};
