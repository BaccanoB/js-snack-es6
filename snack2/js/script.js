// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
var array = [];
var squadre = [
    {
        nome:"Roma",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome:"Borussia",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome:"Manchester",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome:"Fulham",
        punti: 0,
        falliSubiti: 0
    }
]

// function randomNumber(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const randomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

for(var i = 0; i<squadre.length; i++){
    squadre[i]["punti"] =  randomNumber(1,10)
    squadre[i]["falliSubiti"] =  randomNumber(1,10)

    var {nome,falliSubiti} = squadre[i];
    // console.log(nome);
    // console.log(falliSubiti);

    array.push({nome,falliSubiti});
}

console.log(array);
