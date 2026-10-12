const convertData = (data, type) => {
  try {
    const convertedData = data[type].map((item) => {
      return {
        date: item[0],
        [type]: item[1],
      };
    });
    return convertedData;
  } catch (error) {
    console.error(error)
    return { data: [], [type]: [] };
  }
};

export { convertData };
