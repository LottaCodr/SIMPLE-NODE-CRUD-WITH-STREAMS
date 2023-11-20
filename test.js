const name = 'lotta';
const surname = 'Chuka'

console.log(surname);

const greet = (theName) => {
    console.log('Hello, ', theName);
}

greet('Lotta');

setTimeout(() => {
    console.log('In the timeout')
}, 3000)

