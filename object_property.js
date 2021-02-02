const newArr = [];
const students = [
    {id: 21, name: 'Omor Sunny'},
    {id: 30, name: 'mannaa'},
    {id: 40, name: 'sabnuur'},
    {id: 80, name: 'Dipjol'}
];


const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>30);
const biggerOne = students.find(s => s.id>30);
console.log(biggerOne);