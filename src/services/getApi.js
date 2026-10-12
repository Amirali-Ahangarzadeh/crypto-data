const BASE_URL = "https://api.coingecko.com/api/v3/";


const setHeaders = { headers: { "x-cg-demo-api-key": "CG-xR4gwsvYPFNcVX2PbfCLEb74" } };


const getData = async (route, page = null) => {


  const url = page ?  `${BASE_URL}${route}&page=${page}` : `${BASE_URL}${route}`;
  try {

    const controller = new AbortController();
    const response = await fetch(url, setHeaders, {signal:controller.signal});
    if (response.status != 200) {
      return { data: [], error: true };
    } else {
      const result = await response.json();
      return { data: result, error: false };
    }
    return () => controller.abort();
  } catch (error) {
    console.log(error.name);
    return { data: [], error: true };
  }
};

export { getData }
