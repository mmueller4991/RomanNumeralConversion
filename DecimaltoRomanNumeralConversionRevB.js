"user strict";

function convertToRomanNumeral(num) {
var roman = "";
var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X",
 "IX", "V", "IV", "I"];
   var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
   for(var i=0;i<numbers.length;i++) {
     while(num>=numbers[i]) {
		var roman;
		roman = roman + romanNumeral[i];
		num = num - numbers[i];
     }
   }
return roman;
}

function main() {
var input = prompt("Enter number to convert to Roman Numeral");
var num = input;
console.log("The Roman Numeral for " +num+ " is",convertToRomanNumeral(num),".");
}
main()


