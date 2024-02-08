function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const stuff = 8;
    const stuffLunchCost = 50;
    const securityGuardSalaty = 500;
    if (ticketSale < 0) {
        return "Invalid Number"
    }
    let incomePerday = (ticketSale * ticketPrice) - (securityGuardSalaty + (stuff * stuffLunchCost));
    return incomePerday;
}



function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    let lastCharecter = name.charAt((name.length - 1));
    lastCharecter = lastCharecter.toLowerCase();
    if (lastCharecter === 'a' || lastCharecter === 'y' || lastCharecter === 'i' || lastCharecter === 'e' || lastCharecter === 'o' || lastCharecter === 'u' || lastCharecter === 'w') {
        return "Good Name"
    }
    return "Bad Name";
}

function deleteInvalids(array) {
    if (!(Array.isArray(array))) {
        return "Invalid array";
    }
    let antiVirusArray = [];
    for (var i = 0; i < 10; i++) {
        if ((typeof array[i] === 'number') && (array[i] !== NaN) && array[i].toString() !== 'NaN') {
            antiVirusArray.push(array[i]);
        }
    }
    return antiVirusArray;
}


/* It must be deleted bofore submit*/
var calculateT = calculateMoney(10)
console.log(calculateT);
console.log(checkName(['Rashed']));
console.log(deleteInvalids({ num: [1, 2, 3] }));
// let abc = NaN;
// // console.log(String(abc) === 'NaN');
// if (abc.toString() === 'NaN') {
//     console.log('not a Number');
// }




