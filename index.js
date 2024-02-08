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

function password(obj) {
    if (typeof obj.name === "undefined" || typeof obj.birthYear === "undefined" || typeof obj.siteName === "undefined") {
        return "invalid";
    }
    let birthYearDigit = obj.birthYear.toString();
    if (birthYearDigit.length !== 4) {
        return "invalid";
    }
    let generatedPass;
    let capitalizeSiteName;
    capitalizeSiteName = obj.siteName.charAt(0).toUpperCase();
    for (let i = 1; i < obj.siteName.length; i++) {
        capitalizeSiteName += obj.siteName[i].toLowerCase();
    }
    generatedPass = capitalizeSiteName + "#" + obj.name + "@" + birthYearDigit;
    return generatedPass;
}

function monthlySavings(arr, livingCost) {
    if ((!(Array.isArray(arr))) || (typeof livingCost !== 'number')) {
        return "invalid input";
    }
    let totalEarn = 0;
    let savings = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            totalEarn += arr[i] - (arr[i] * 20) / 100;
        }
        else {
            totalEarn += arr[i];
        }
    }
    savings = totalEarn - livingCost;
    if (savings < 0) {
        return "earn more";
    }
    return savings;
}

