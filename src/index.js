module.exports = function toReadable (number) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let arr1 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
   if (number < 20) {
       return arr[number];
       } else if (number < 100) {
         if (number%10 == 0) {
           return arr1[number/10]
           } else { return arr1[Math.floor(number/10)] + ' ' + arr[number%10]
           }
           /* 100, 200, 300, 400, 5006 600, 700, 800, 900 */
         } else if (number >= 100 && number%100 == 0) {
           return arr[Math.floor(number/100)] + ' hundred'
           /* 110,120, 150 и т.д.*/
           } else if (number >= 100 && number%100%10 == 0){
                return arr[Math.floor(number/100)] + ' hundred ' + arr1[number%100/10]
                /* до 119 до 219 и т.д. */
              } else if (number >= 100 && number%100%10 !== 0 && number%100 <= 19) {
               return arr[Math.floor(number/100)] + ' hundred ' + arr[number%100]
               /* 125 после 19, когда нужно брать десятки из arr1 и иединицы из arr */
              } else {
                return arr[Math.floor(number/100)] + ' hundred ' + arr1[Math.floor(number%100/10)] + ' ' + arr[Math.floor(number%100%10)]
                }
                         
             
             
             
}
