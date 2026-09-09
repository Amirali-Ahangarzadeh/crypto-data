
const BASE_URL = "https://api.coingecko.com/api/v3/";
export const get = async(route) => {
  try {
    const url = `${BASE_URL}${route}`
  const response = await fetch(url, {
    headers : {'x-cg-demo-api-key': "CG-xR4gwsvYPFNcVX2PbfCLEb74"}
  });
  if(response.status != 200)
  {
    return false;
  }
 const result = await response.json();
 return result;
  } catch (error) {
    console.log(error.name);
    return false;
  }
}