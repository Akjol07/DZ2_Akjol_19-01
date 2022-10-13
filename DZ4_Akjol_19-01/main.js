// Задача номер 1
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let date = new Date();
let month = date.getMonth();
alert(months[month]);


// Задача номер 2
function buttonClick() {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input1Value = input1.value;
    let input2Value = input2.value;
    input1.value = input2Value;
    input2.value = input1Value;
}
