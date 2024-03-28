const TYPES = {
  string: "string",
};

/**
 * Extracts the year from a string in the format of "xxBBY".
 *
 * Examples:
 * - "123BBY" => 123
 * - "02BBY" => 2
 * - "unknown" => "error"
 */
export function doExtractYearFromBBY(str) {
  const number = str.split("BBY")[0]
  console.log(str)

  switch(str){

    case str === "unknown":
      console.error("year is unknown");
      throw Error("year is unknown");

    case typeof str !== TYPES?.string:
      console.error(`${str} was not a string`);
      throw Error("not a string");

    case !str.includes('BBY'): 
      console.error(`${str} did not end in BBY`);
      throw Error("not in BBY format");

    case isNaN(number): 
      console.error(`${str} was not a number`);
      throw Error("not a number");

      default:
        return number;
        
  }  
}



