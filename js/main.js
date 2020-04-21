//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// Выберите при помощи селекторов DOM
// — все HTML-элементы strong и окрасьте их в зеленый цвет
let first = document.querySelectorAll('strong')
for(let i=0;i<first.length;i++){    
    first[i].style.color='green';  
}




// — найдите все HTML-элементы em и добавьте им класс .selected
let second = document.querySelectorAll('em')
for(let i=0;i<second.length;i++){
    second[i].classList.add('selected')
}


// — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected

let third2 = document.querySelectorAll('.row mark')
for(let i=0;i<third2.length;i++){
    third2[i].classList.add('selected')
}  


// — Найдите все гиперссылки и удалите у них подчеркивания
let fourth = document.querySelectorAll('a')
for(let i=0;i<fourth.length;i++){
    fourth[i].style.textDecoration='none'
}
 



// — Найдите все HTML-элементы, который содержат слово «Задания» и находятся в
// элементе с классом .container
/*
let regexp = /Задания/g;
let fifth = document.querySelectorAll('.container').innerHTML;
let result = Array.from(fifth).match(regexp);
console.log(result) 
*/
// — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.
let sixth = document.querySelectorAll('strong')
for(let i=0;i<sixth.length;i++){
    sixth[i].classList.toggle('some')
}

// — среди набора элементов с классом .row удалите класс у второго элемента
let seventh = document.querySelectorAll('.row')
seventh[1].classList.remove('row')

// — прочитайте CSS-свойство color у второй гиперсылки в тексте
let last = document.getElementsByTagName('a')
let last1= window.getComputedStyle(last[1])
console.log(last1.color);



