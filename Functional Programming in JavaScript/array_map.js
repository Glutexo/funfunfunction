var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];

// var names = [];

// for (var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name);
// }

// var i = 0;
// while(i < animals.length) {
//     names.push(animals[i].name);
//     i++;
// }

// function animalName (animal) {
//     return animal.name
// }

// var names = animals.map(animalName);

// var names = animals.map((animal) => { return animal.name; });
var names = animals.map(animal => animal.name);

console.log(names)
