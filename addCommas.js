function addCommas(number) {
    // Convert the number to a string, split it at the decimal point (if any)
    // and store the integer and decimal parts in separate variables
    const [integerPart, decimalPart] = number.toString().split(".");
  
    // Add commas to the integer part using a regular expression
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    // If there is a decimal part, combine it with the formatted integer part
    const result = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
  
    return result;
}
  

module.exports = addCommas;