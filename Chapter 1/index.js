var SPENDING_THRESHOLD = 200;
var TAX_RATE = 0.08;
var PHONE_COST = 99.99;
var ACC_COST = 9.99;

var bank_balance = prompt("What is your bank balance?");
var total = 0;

function salesTax (total) {
    return total * TAX_RATE;
}

function formatTotal (total) {
    return "$" + total.toFixed(2);
}

for (i = total; i < bank_balance; i += PHONE_COST) {
    total = i;

    if (total < SPENDING_THRESHOLD) {
        total = total + ACC_COST;
    }
}

total = total + salesTax(total);

console.log("Your total comes out to: " + formatTotal(total));

if (total > bank_balance) {
    console.log("I'm sorry, you can't afford it");
}

else {
    console.log("Your new bank balance is " + formatTotal(bank_balance - total));
}
