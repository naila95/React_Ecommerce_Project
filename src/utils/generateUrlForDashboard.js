export const dynamicUrl = (params) => {
  let data = "?";
  for (const [index, [key, value]] of Object.entries(Object.entries(params))) {
    data += `${key}=${value}${
      Number(index) !== Object.keys(params).length - 1 ? "&" : ""
    }`;
  }
  return data.length > 1 ? data : "";
};
