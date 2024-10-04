const user = {
    name : 'Raju',
    email: 'raju@mail.com',
    password:'abc123'
    
};
console.log(user);
console.log(user.name);
console.log(user['email']);

user.password='xyz1234';
console.log(user);
user.address='Lucknow';
console.log(user);

console.log( Object.keys(user));
console.log( Object.values(user));


const smartPhones = {
    Brand : 'Samsung',
    model : 'Galaxy M31',
    price : 14999,
    colors : ['Black','Blue', 'Red'] 
};
//change the model of phone to 'Galaxy S24'
// Access the second color
// replace the first color with 'White'
// add a new color 'Green'
 
console.log(smartPhones.colors);

smartPhones.model='Galaxy S24'

console.log(smartPhones);

console.log(smartPhones.colors[1]);


smartPhones.colors[0]='White;'
smartPhones.colors.push('Green')
console.log(smartPhones);

const smartphoneArray = [
{
    Brand : 'Samsung',
    model : 'Galaxy M31',
    price : 13999,
    colors : ['Black','Blue', 'Red'] ,
},
{
    Brand : 'Oneplus',
    model : '8T',
    price : 41999,
    colors : ['Black','Blue', 'Red'] ,
},
{
    Brand : 'Apple',
    model : 'iphone12',
    price :  79900,
    colors : ['Black','White', 'Green'] 
},
{
    Brand : 'Xiaomi',
    model : 'Redmi Note 9 pro',
    price : 15999,
    colors : ['Black','Blue', 'Red'] 
},
{
    Brand : 'Realme',
    model : 'Narzo 20 pro',
    price : 18999,
    colors : ['Black','whit', 'green'] 
} ];

console.log(smartphoneArray.lenght);
console.log(smartphoneArray[1].price);

// access 2nd color of third phone.
console.log(smartphoneArray[2].colors[1]);

//replace the first color of 4th phone with 'silver'
smartphoneArray[3].colors[0]='silver'
console.log(smartphoneArray[3]);

//add a new color yellow to the 5th phone

smartphoneArray[4].colors.push('Yellow');
console.log(smartphoneArray[4]);

const budgetPhones = smartphoneArray.filter((phone) =>{return phone.price>15000 && phone.price <20000})

console.log(budgetPhones);

const brands = smartphoneArray.map((phone) => {return phone.brand})
console.log(brands);

// filter all phone having 'Black' color

console.log([1,2,3,4,5].includes(7));
const blackPhones= smartphoneArray.filter((phone) => { return phone.colors.includes('Black') } );
console.log(blackPhones);


//filter all samsung phones

const samsungPhones = smartphoneArray.filter((phone) =>{return phone.Brand === 'Samsung'});
console.log(samsungPhones)

const keyword = 'sa';
const filteredPhones = smartphoneArray.filter((phone)=>{ return phone.Brand.toLowerCase().includes(keyword.toLowerCase())});
console.log(filteredPhones);

