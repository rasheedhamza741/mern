const nums =[3,7,9,2,1,6,8];

for(let i=0; i < nums.length;i++){

    // console.log(nums[i]);
    
}
console.log('---------------');


for(let n of nums){
    // console.log(n);
    
}

console.log('---------------');

nums.forEach(()=>{console.log('function called');});
console.log('---------------');

nums.forEach((a)=>{console.log(a);});
console.log('---------------');

nums.forEach((a,b)=>{console.log(a,b);});
console.log('---------------');

nums.forEach((a,b,c)=>{console.log(a,b,c);});

// WAP to print all even number form the array

const array2 = [1,2,3,4,5,6,7,8];

// for(let i = 0; i<array2.length; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// WAP to print all even number form the array with forEach MEthod

// array2.forEach((a)=>{
//     if(a%2===0){
//         console.log(a);
//     }
// });

// WAP to filter all odd number add in new array

const odds = []

array2.forEach((a)=>{
    if(a%2 !== 0){
        // console.log(a);
        odds.push(a);
    }
});

// console.log(odds);

// WAP to store square of all nums in another array

let square = [];

array2.forEach((a)=>{
    square.push(a*a);
});

// console.log(square);

// MAP function its only work on array

const sqre = array2.map((n)=>{
    return n**2;
});

// console.log(sqre);

const names = ['raju','ramu','pinki','kaliya','chutki'];

// console.log('raju'.toUpperCase());

const upperNames = names.map( (n)=>{
    return n.toUpperCase()
} );
// console.log(upperNames);

const prices = [ '₹234.56', '₹345.67','₹489.65','₹658.46'];

//WAP to convert all prices to integer

const intPrices = prices.map((p)=>{
    return parseInt(p.slice(1))
})

console.log(intPrices);

//add 18% GST to all prices

const prices2 = [2400, 347, 786, 675, 76906, 238];

const gstprices = prices2.map((n)=>{
    return (n+(n*18)/100);
})
console.log(gstprices);

//WAP TO SPLIT SURNAMES

const fullNames = ['Umair Azhar', 'Hamza Rasheed', 'Ayush Joshi', 'Ranchhoddas Chanchad', 'Raju Rastogi'];

// console.log('Umair Azhar'.split(' '));

const firstName = fullNames.map((n)=>{
    return n.split(' ')[0];
    
})

// console.log(firstName);

//filter
const budgetPrices = prices2.filter((p)=>{ return p<1000});
// console.log(budgetPrices);

const nums2 = [3,7,9,2,1,6,8];


//filter all odd numbers
const odd= nums2.filter((p) =>{return p%2 !==0 })
// console.log(odd);

const friendNames = ['raju','ramu','pinki','kaliya','chutki'];
const friend_list=friendNames.filter((p)=>{return p.length>4})
console.log(friend_list);

