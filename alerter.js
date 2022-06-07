const { expect } = require("chai");

let alertFailureCount = 0;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return 200;
}

function alertInCelcius(farenheit) {
    const celcius = convertToCelcius(farenheit);
    const returnCode = networkAlertStub(celcius);
    countNumberOfFailure(returnCode);
    // if (returnCode != 200) {
    //     // non-ok response is not an error! Issues happen in life!
    //     // let us keep a count of failures to report
    //     // However, this code doesn't count failures!
    //     // Add a test below to catch this bug. Alter the stub above, if needed.
    //     alertFailureCount += 1;
    // }
}

function countNumberOfFailure(code){
    if (code != 200) {
        return alertFailureCount += 1;
    }
}

function convertToCelcius(farenhite){
    const celcius = (farenhite - 32) * 5 / 9;
    return celcius;    
}

alertInCelcius(400.5);
alertInCelcius(303.6);
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
