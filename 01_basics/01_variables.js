const accountId = 144524
let accountEmail = "abc@gmail.com"
var accounPassword = "12347"
accountCity = "Kolkata"
let accountState;

//accountId = 2 //Not allowed

accountEmail = "dp@dp.com"
accounPassword = "25894"
accountCity = "Bengaluru"
console.log(accountId);
/*
Prefer not to use 'var'
because of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accounPassword, accountCity, accountState])