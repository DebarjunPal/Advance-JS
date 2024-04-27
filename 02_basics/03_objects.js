// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Debarjun",
    [mySym]: "mykey1",
    age: 20,
    location: "Kolkata",
    email: "debarjun@pal.com"
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser[mySym])

JsUser.email = "pal@debarjun.com"

//Object.freeze(JsUser)
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingtwo = function(){
    console.log('Hello JS User, ${this.name}'); //imp
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());