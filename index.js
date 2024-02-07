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


/* It must be deleted bofore submit*/
var calculateT = calculateMoney(10)
console.log(calculateT);
console.log(checkName(['Rashed']))