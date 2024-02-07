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


/* It must be deleted bofore submit*/
var calculateT = calculateMoney(10)
console.log(calculateT);