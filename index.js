// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function () {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(fareValueMultiplier) {
    return function (fare) {
       return fareValueMultiplier * fare;
    };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}