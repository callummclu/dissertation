function addCommasToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*

    This function only allows numbers to be attributes, this prevents 
    strings, booleans or any other data types to be sent through and 
    cause an error

    An example of how this would be resolved in javascript is

    function addCommasToNumber(num){
        if (typeof num === 'number'){
              return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return new Error(`${typeof num} is an invalid parameter type`)
    }
*/
