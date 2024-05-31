export let today = function () {
  const currentDate = new Date().toISOString().split("T")[0];
  const today = currentDate.split("-");
  const todayStr: string = today[2] + today[1] + today[0];
  //console.log("today: ", todayStr);
  return todayStr;
};
