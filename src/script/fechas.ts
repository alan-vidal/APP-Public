export let fechaOrder = function (date: string) {
  let currentDate = date.split("T")[0]; //2024-06-14
  let currentHour = date.split("T")[1]; //09:00:00

  let dateOrder = currentDate.split("-");
  let hourOrder = currentHour.split(":");

  let fechaOrden =
    dateOrder[2] +
    "/" +
    dateOrder[1] +
    "/" +
    dateOrder[0] +
    " " +
    hourOrder[0] +
    ":" +
    hourOrder[1];
  return fechaOrden;
};
