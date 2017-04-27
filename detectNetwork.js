// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
    var cardSplit = cardNumber.split('');
    var length = cardSplit.length;
    var idx0 = cardSplit[0];
    var idx1 = cardSplit[1];
    return cardNumber.split('').reduce(function(str, char, idx, arr) {
        // if (arr.length === 14 && (arr[0] === 3 && arr[1] === 8 || 9)) {
        //   str = "Diner's Club";
        // } else if (arr.length === 15 && (arr[0] === 3 && arr[1] === 4 || 7)) {
        //   str = "American Express";
        // } 
        if (length === 14 && idx0 === '3' && (idx1 === '8' || idx1 === '9')) {
            str = "Diner's Club";
        } else if (length === 15 && (idx0 === '3' && (idx1 === '4' || idx1 === '7'))) {
            str = "American Express";
        } else if (length === 16 && (idx0 === '5' && (idx1 === '1' || idx1 === '2' || idx1 === '3' || idx1 === '4' || idx1 === '5'))) {
            str = "MasterCard";
        } else if ((length === 16 || length === 19) && (arr.slice(0, 2).join('') === '65' || (parseInt(arr.slice(0, 3).join('')) >= 644 && parseInt(arr.slice(0, 3).join('')) <= 649) || arr.slice(0, 4).join('') === '6011')) {
            str = "Discover";
        } else if ((length >= 12 && length <= 19) && (arr.slice(0, 4).join('') === '5018' || arr.slice(0, 4).join('') === '5020' || arr.slice(0, 4).join('') === '5038' || arr.slice(0, 4).join('') === '6304')) {
            str = "Maestro";
        } else if ((length >= 16 && length <= 19) && ((parseInt(arr.slice(0, 3).join('')) >= 624 && parseInt(arr.slice(0, 3).join('')) <= 626) || (parseInt(arr.slice(0, 4).join('')) >= 6282 && parseInt(arr.slice(0, 4).join('')) <= 6288) || (parseInt(arr.slice(0, 6).join('')) >= 622126 && parseInt(arr.slice(0, 6).join('')) <= 622925))) {          
                str = "China UnionPay";          
        } else if ((length === 16 || length === 18 || length === 19) && (arr.slice(0, 4).join('') === '4903' || arr.slice(0, 4).join('') === '4905' || arr.slice(0, 4).join('') === '4911' || arr.slice(0, 4).join('') === '4936' || arr.slice(0, 6).join('') === '564182' || arr.slice(0, 6).join('') === '633110' || arr.slice(0, 4).join('') === '6333' || arr.slice(0, 4).join('') === '6759')) {
            str = "Switch";
        } else if (((length === 13 || length === 16 || length === 19)) && idx0 === '4') {
            str = "Visa";
        }
        return str;
    }, '');
};
