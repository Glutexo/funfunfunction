var _ = require('underscore')

var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];

//var dogs = [];

// for (var i = 0; i < animals.length; i++) {
//     if (animals[i].species === 'dog') {
// 	    dogs.push(animals[i]);
//     }
// }

// var i = 0;
// while (i < animals.length) {
//     if (animals[i].species === 'dog') {
// 	dogs.push(animals[i]);
//     }
//     i++;
// }

function isDog (animal) {
    return animal.species === 'dog';
}

var dogs = animals.filter(isDog);
var otherAnimals = _.reject(animals, isDog);

console.log(dogs)
console.log(otherAnimals)
