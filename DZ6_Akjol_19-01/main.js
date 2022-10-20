//Задача номер 1
let football = ['barca', 'real', 'psg', 'liverpool', 'bavaria', 'arsenal'];
let [elem1, elem2, ...arr] = football;
console.log('elem1: ',elem1,' elem2:',elem2,"arr:",arr)



// // Задача номер 2
let newArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
newArr.reverse();
let [elem1, elem2] = newArr;
console.log(elem1,elem2)


// Задача номер 3
function name(){
    let a = prompt('Ваше имя:')
    if (a.length > 0){
        alert("Привет " + a)
    }else if (a.length === 0) {
        alert("Привет Аноним")
    }
}
name()
