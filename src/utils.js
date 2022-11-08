const TYPES = {
  string: "string",
};

export function doExtractYearFromBBY(str) {
  try {
    if (typeof str !== TYPES?.string) {
      console.error(`${str} was not a string`);
      throw Error("not a string");
    }
    if (!/BBY$/.test(str)) {
      console.error(`${str} did not end in BBY`);
      throw Error("not in BBY format");
    }
    const number = parseInt(str?.substring(0, 2));
    if (isNaN(number)) {
      console.error(`${str} was not a number`);
      throw Error("not a number");
    }
    return number;
  } catch (error) {
    return "error";
  }
}
