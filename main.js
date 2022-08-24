
var myName = 'Arnell';
// my name

var myAge = 27;
// my current age in years

var earlyYears = 2;
// identify first 2 years of life

earlyYears *= 10.5;
// first 2 years of a dogs life are equal to 10.5 years each

var laterYears = myAge - 2;
// identify number of years in age past the first 2 years

laterYears *= 4;
// after first 2 years, following years are equal to 4 years each

console.log(earlyYears);
// returns 21 which is 2 * 10.5

console.log(laterYears);
// returns 100 which is (27-2) * 4

myAgeInDogYears = earlyYears + laterYears;
//  first 2 years + later years in dog years

console.log(myAgeInDogYears);
// returns 121

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// final string with inserted string values for myName and myAge
