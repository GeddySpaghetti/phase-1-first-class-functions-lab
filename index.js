 const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

 const returnFirstTwoDrivers = function(drivers) {
    return (drivers.slice(0, 2));
    
}
  const returnLastTwoDrivers = function(drivers) {
      return (drivers.slice(-2));
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
   return returnFirstTwoDrivers(arrayOfDrivers);
} 
