var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    pen: 25,
    mouse: 1
}

// when you know the specific property name, use dot notation
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation
var penCount2 = shoppingCart['pen'];

var propertyName = 'books';

var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue)

var properties  = Object.keys(shoppingCart);
// console.log(properties);
var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);
 console.log(shoppingCart);

//  set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 30;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);