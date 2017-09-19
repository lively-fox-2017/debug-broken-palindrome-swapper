function PalindromeSwapper(){

}

function isPalindrome(str){
    var res = ''
    for(var i = str.length - 1; i >= 0; i--){
        // console.log(str[i])
        res += str[i]
        // console.log(res)
        if(res !== str){
            console.log('bukan palindrome')
        }else{
            console.log('palindrome')
        }
    }
    // return true
}

console.log(PalindromeSwapper('racecar')) // true
console.log(isPalindrome('racecar')) // true
// console.log(isPalindrome('makan')) // true