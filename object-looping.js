var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    pen: 25,
    mouse: 1,
    shoes: 2
}

var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge =[12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi:  14

}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    pen: 25,
    mouse: 1,
    shoes: 2
}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for(var i =0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);

}

// for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}