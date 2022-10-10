// Задача номер 1
let a = 1;
if (a > 0) {
    let GGG = function () {
        console.log('!');
    }
    GGG()
} else {
    let GGG = function () {
        console.log('!!');
    }
    GGG()
}

// Задача номер 2
let arr = [];
for (let i=0; i<10; i++) {
    arr[i] = 'x';
}
console.log(arr);


// Задача номер 3
function counter() {
    let i = 1;
    return function () {
        return i++
    };
}
let func = counter();
console.log(func());
console.log(func());
console.log(func());
console.log(func());






