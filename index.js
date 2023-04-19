const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// const totalBatteries = batteryBatches.reduce( 
//     (accumulator, currentValue) => accumulator + currentValue, 0);
  
//     return totalBatteries

const totalBatteries = batteryBatches.reduce( function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);      