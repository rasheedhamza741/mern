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
