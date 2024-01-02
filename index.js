// Code your solution in this file!
//function returnFirstTwoDrivers (){
    //const driversNames= ['Antonia', 'Nuru', 'Amari', 'Mo'];
  //  const driversNames= ['Antoinia', 'Nuru', 'Amari', 'Mo'];
//const returnFirstTwoDrivers= getFirstTwoElements(driversNames);

//}
//console.log(returnFirstTwoDrivers)

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

const driveArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(driveArray));

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};

const driveInnit = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnLastTwoDrivers(driveInnit));

function selectingDrivers(driverFunction, driverArray) {
  return driverFunction(driverArray);
}

const selectedDrivers = selectingDrivers(returnFirstTwoDrivers, driveArray);
console.log(selectedDrivers);

function createFareMultiplier(multiplier) {
  return function (fare) {
      return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);
let actualFare = 30;
let doubledFare = fareDoubler(actualFare);
console.log(`Doubled Fare: $${doubledFare}`);

const fareTripler = createFareMultiplier(3);
let originalFare = 100;
let tripledFare = fareTripler(originalFare);
console.log(`Tripled Fare: $${tripledFare}`);

function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
  return driverSelector(arrayOfDrivers);
}

const firstTwo = selectDifferentDrivers(driveArray, returnFirstTwoDrivers);
console.log(firstTwo);

const lastTwo = selectDifferentDrivers(driveInnit, returnLastTwoDrivers);
console.log(lastTwo);

//function selectingDrivers(arrayOfDrivers,driverSelector){
 // return driverSelector(arrayOfDrivers);
//}
//const firstTwoDrivers = selectDifferentDrivers(driveArray, returnFirstTwoDrivers);
//console.log(firstTwo);

//const lastTwoDriver = selectDifferentDrivers(driveInnit, returnLastTwoDrivers);
//console.log(lastTwo);