// Je déclare mes variables 
var kelvins = 294;
// j'effectue le calcul directement dans la variable pour avoir la température en celsius
var celsius = kelvins - 273;
// j'effectue le calcul directement dans la variable pour avoir la température en fahrenheits 
var fahrenheits =celsius * (9/5) + 32;
//methode pour avoir un resultat sans les décimales
fahrenheits = Math.floor(fahrenheits);


var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log(kelvins, "kelvins");