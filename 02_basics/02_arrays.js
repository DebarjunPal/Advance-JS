const marvel_heroes = ["Thor" , "Ironman" , "spiderMan"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

//output:
// [ 'Thor', 'Ironman', 'spiderMan', [ 'superman', 'flash', 'batman' ] ]
// flash

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);
//output
// [ 'Thor', 'Ironman', 'spiderMan', 'superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes);

const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realArr = newArr.flat(Infinity)

console.log(realArr);
//output
//[
    //1, 2, 3, 4, 5,
    //6, 7, 6, 7, 4,
    //5
//]

console.log(Array.isArray("Debarjun"));
console.log(Array.from("Debarjun"));
console.log(Array.from({name: "Debarjun"})); //Important for interviews

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));