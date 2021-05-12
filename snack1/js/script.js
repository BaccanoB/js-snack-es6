// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

var  biciclette = [
    {
        nome:"mountain bike",
        peso: 12
    },
    {
        nome:"bici da corsa",
        peso:10
    },
    {
        nome:"ciclocross",
        peso:13
    },
    {
        nome:"BMX",
        peso:20
    }
];

var minimo = 0;
for(var i = 1; i<biciclette.length; i++){
   if (biciclette[i].peso < biciclette[minimo].peso) {
        minimo = i;
   }
}


var { nome, peso } = biciclette[minimo];
console.log(nome);
console.log(peso);

var biciLeggera = document.getElementById("bici");

var datiBiciLeggera = `La bici leggera è la ${nome} e il suo peso è ${peso}`;

biciLeggera.innerHTML = datiBiciLeggera;

// alternativa
// var biciLeggera = bicicletta[0];
// for(var i = 1; i<biciclette.length; i++){
//     var biciCorrente = bicicletta[i];
//     if (biciCorrente.peso<biciLeggera.peso)
//     biciLeggera = biciCorrente;
// }
// console.log(biciLeggera);

// console.log("La bici con peso minore è: " + biciclette[minimo].nome);