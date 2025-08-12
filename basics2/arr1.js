const arr=[0,1,2,3,4,5];
console.log(arr);
// prints  0, 1, 2, 3, 4, 5 ]

const arr2= arr.slice(1,3); // does not include 3 ->[1,3)->doesnot make changes to orig array
console.log(arr2);//[ 1, 2 ]
console.log(arr);//[ 0, 1, 2, 3, 4, 5 ]


const arr3= arr.splice(1,3);// include 3 ->[1,3]-> make changes to orig array
console.log(arr3);
console.log(arr);