export let estadoAPI = async function (fullUrl: string) {
  const request = new Request(fullUrl);
  const response = await fetch(request);
  // const data = await response.json();
  const status: number = response.status;
  //console.log("Status:", status);
  return status;
};
