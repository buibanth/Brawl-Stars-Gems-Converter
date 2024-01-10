function showConverter() {
    document.getElementById("getStarted").style.display = "none";
    
    document.getElementById("formCurrency").style.display = "inline";
}

function showImage(){
    document.getElementById('imageGems').style.display = "inline"
}


let currencySymbols = {
    'dollar': '$',
    'euro': '€',
    'hryvna': '₴',
    'zloty': 'zł',
    'pound': '£',
    'yuan': '¥',
    'rupee': '₹'
};

function addCurrencySymbol() {
    
    let amountInput = document.getElementById('inputMoney');
    
    amountInput.value = amountInput.value.replace(/[^0-9$€₴zł£¥₹]/g, '')
    
    // Get the selected currency
    
    let selectedCurrency = document.getElementById('currency').value;

    // Get the user input (numeric part)
    
    let userInput = amountInput.value.replace(currencySymbols[selectedCurrency], '');
    
    // Add the currency symbol to the input value
    amountInput.value = currencySymbols[selectedCurrency] + userInput;
    
}

function updateCurrencySymbol() {
    let selectedCurrency = document.getElementById('currency').value;
    let amountInput = document.getElementById('inputMoney');
    
    amountInput.value = currencySymbols[selectedCurrency];
}

function calculateGems(){
    //get amount of gems that user inputted (lol does this word exists?) + replace currency symbols
    
    let amountGems = /*parse Float in there */ document.getElementById('inputMoney').value.replace(/[$€₴zł£¥₹]/g, '');
    
    let selectedCurrency = document.getElementById('currency').value;

    // 30 gems divided by the price of them in that currency
    
    let coefficientsOfCurrencysToGems = { // in the update will change this using Map
        'dollar': 15 ,
        'euro': 12 ,
        'hryvna': 0.42,
        'zloty': 2.5 ,
        'pound': 15 ,
        'yuan': 2.5 ,
        'rupee': 0.16
    }
    
    /*let addPercentageBorder = {  
        'dollar': [2,5,10,20,50,100],
        'euro': [2.5,6,20,24,60,120],
        'hryvna': [70,170,340,680,1690,3380],
        'zloty': [12,30,60,120,300,600],
        'pound': [2,5,10,20,50,100],
        'yuan': [12,30,68,128,328,648],
        'rupee': [180,450,900,1800,4500,8900]
    }
    
    let additionalPercentage = [0, 0, 0.05, 0.15, 0.2, 0.25]

    // i feel really stupid how i did this ⬆️ 🤙🤙🤙
    
    let calcOutputGems = coefficientsOfCurrencysToGems[selectedCurrency] * amountGems;

    let thresholds = addPercentageBorder[selectedCurrency];
    let appliedPercentage = 0;  // Initialize the applied percentage
    
    for (let i = 0; i < thresholds.length; i++) {
        if (amountGems >= thresholds[i]) {
            // Apply the corresponding additional percentage
            appliedPercentage = additionalPercentage[i];
        } else {
            break;  // Stop checking further thresholds once a threshold is not exceeded
        }
    }
    
    // Apply the calculated additional percentage to calcOutputGems
    calcOutputGems += calcOutputGems * appliedPercentage; */
    

    const calcOutputGems = coefficientsOfCurrencysToGems[selectedCurrency] * amountGems

    let paragraphGems = document.getElementById('outputGems')

    paragraphGems.innerHTML = calcOutputGems
}
    
function updateOutputGems(){
    calculateGems()
}