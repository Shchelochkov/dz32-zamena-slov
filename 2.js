// объявляем переменные 
let but = document.getElementById('but');
let rez = document.getElementById('rez');
let text1 = document.getElementById('textarea1');
let zamenSlovo = document.getElementById('inp');
let slovo = document.getElementById('inp2');

but.onclick = f1 //нажатие на кнопку запускает функцию f1

const i =[] //массив 

//функция замены слова в тексте textarea на другое
function f1() {
    let n = text1.value;
    let rezult = n.replaceAll(slovo.value, zamenSlovo.value); //замена
    let kolichestvo = rezult.indexOf(zamenSlovo.value); //поиск замен
    kolichestvo = 0
    while (kolichestvo != -1) {
        kolichestvo = rezult.indexOf(zamenSlovo.value, kolichestvo + 1);
        console.log(kolichestvo);
        i.push(kolichestvo);
    }
    // вывод результата на экран в rez
    rez.innerHTML = rezult + '<br>' + 'Количество замен: ' + i.length;
}