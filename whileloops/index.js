/* 
?   While loop structure


    while (expression) {
        code block...
    }

    - Main purpose for while loops are when the iteration is uncertain
    ex.
    - If we wanted to get a spade from multiple decks of cards, we don't know when to stop looping. We can a while loop to get us what we need and leave.

*/

let numArr = [1, 5, 35, -23, 0, 3, 10, 4.26];
let sum = 0;
let index = 0;

while (index < numArr.length) {
    if(numArr[index] > 0){
        sum+= numArr[index]
    }    
    index++
}

console.log("The sum of the positive nums is:",sum)


let city = [
"building",
"sign",
"window",
"bridge",
"lighthouse",
"light pole",
"tree",
"empty street"
]

let structure =  city[0] // building
let pos = 0;

while (structure != "empty street" ){
    console.log(`Spider-man swings from the ${structure}`);
    pos++
    structure = city[pos]
}

/* 
    Do While

    do {
        ... code
    } while (expression)

    - works like a while loop, but the code in the do with run at least once regardless of the expression
*/


let spidyHP = 20;
let badguys = [
    {
        baddie: "Green Goblin",
        hp: 15
    },
    {
        baddie: "Venom",
        hp: 25
    },
    {
        baddie: "Stilt-man",
        hp: 5
    },
    {
        baddie: "Thug",
        hp: 0
    }
]


let rand = Math.floor( Math.random() * badguys.length )

// console.log(badguys[rand]);
let villain =  badguys[rand]


console.log(`${villain.baddie} has appeared!`);

do {
    if (villain.baddie === "Thug"){
        console.log("Spiderman webs thug, ez pz");
        break;
    }

    console.log(`${villain.baddie} hits spiderman`);
    spidyHP--
    console.log(`Spiderman hp : ${spidyHP}`);
    
    if (spidyHP <= 0){
        console.log("game over");
        break;
    }

    let spidyHit = Math.floor(Math.random() * 3)

    console.log(`Spiderman hits ${villain.baddie} for ${spidyHit}`)

    villain.hp-=spidyHit
    
    console.log("villain hp", villain.hp);

} while (villain.hp > 0)


villain.hp <= 0 
? console.log(`Spiderman captures ${villain.baddie}`)
: console.log(`${villain.baddie} has taken down spiderman`);

