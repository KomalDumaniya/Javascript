let arr = [
    {name : "orange", price : 55}, 
    {name : "grapes", price : 34}, 
    {name : "papaya", price : 66}
];

const Search = arr.filter(item => item.price >50);
console.log(Search);