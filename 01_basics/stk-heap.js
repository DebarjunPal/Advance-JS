// ---------------------------------------- //
// Stack (Primitive) , Heap (Non-Primitive)

let myVar = "dpal"

let anotherVar = myVar 
anotherVar = 'dcpal'

console.log(myVar);
console.log(anotherVar);


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl" 
}

let userTwo = userOne

userTwo.email = "user1@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//------------------------------------------//