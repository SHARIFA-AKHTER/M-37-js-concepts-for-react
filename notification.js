const person = {
    name: 'Modhu mia',
    profession: 'Traffic surgeon',
    age: 39,
    25: 'summer',
    'son-name': 'sunny'
    address: 'shahabag'
}
//dot notation
const prof1 = person.profession;

//bracket notation
const prof2 = person["profession"];
const pName = 'profession';
const prof3 = person[pName];
console.log(prof3);

const season = person[25];
// console.log(season);
const son = person['son-name'];