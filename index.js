// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

const driversList = ['Antonia', 'Nuru', 'Amari', 'Mo']

returnFirstTwoDrivers(driversList)
returnLastTwoDrivers(driversList)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(fare){
        return fare * number;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,selector){
    return selector(drivers);
}