/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  if(isPalindrome(str)=== true){  //kondisi sudah palindrome TRUE
    return true;
  }
  for (var i = 0; i < str.length; i++) {
    let newStr = '';
    for (var j = 0; j < str.length; j++) { //i diganti j++
      if (i === j) {
        newStr += str[j+1];
        newStr += str[j];
        j++;                //j++ ditaro diatas bagan
      } else {
        newStr += str[j];
      }
    }
    // console.log('-----------'+newStr);
    // console.log(isPalindrome(newStr));
    if (isPalindrome(newStr)) return true;
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  // console.log(str.split('').reverse().join(''));
  if (str.split('').reverse().join('') === str) return true;
  return false;
}
// reverse = racecra
console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
