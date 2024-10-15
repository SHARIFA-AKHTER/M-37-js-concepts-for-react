//1.array destructing
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];


// const [x, y] = [42,65]

const [x, y] = numbers;

// console.log(x, y)

function boxify(num1, num2){
    const nums =[num1, num2];
    return nums;
}

console.log(boxify(90, 34));

const student = {
    name: 'sakib khan',
    age:32,
    movies: ['king khan', 'dhaker mastan']
}
const [firstMovie, secondMovie] = student.movies;

//object destructuring
// const { name, age} = { name: 'alu', age: 14};
const {name, age} = { id:12, name: 'alu', salary:3400,age:14};

const employee = { 
    id: 'vs Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html','css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'germin'
        }
    }

}

const {machine,id} =employee;
const { weight,address} = employee.specification;
const {brand} = employee?.specification?.watch;

