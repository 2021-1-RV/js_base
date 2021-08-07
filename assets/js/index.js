/*let x1="hello js", x2=100, x3=5.5, x4=true;
const COLOR_RED='red';
let a=5,h=10;
let s= 1/2 * a * h;
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(COLOR_RED);
console.log('площадь треугольника', s);
alert(`Result is: x1=${x1}, x2=${x2}, x3=${x3}, x4=${x4}, COLOR_RED=${COLOR_RED}`);
alert(`Result is: ${s}`);*/

let x1 = prompt("Сколько будет 2+2?");
if(x1 == 4){
    console.log(`Верно 2+2 будет равно: ${x1}`);
}else{
    console.log("Неверно 2+2 будет равно 4")
}

let x2 = prompt("Стоимость покупки: ");
if(x2 >= 500){
    x3 = x2 * 0.02;
    console.log(`Вы получили скидку в 2%, ваша скидка: ${x3}`);
}else{
    console.log("Ваша сумма покупки меньше 500 грн");
}

let x4 =prompt("введите число в гривнах:");
let x5 =prompt("введите число в копейках:");
console.log(`${x4} грн. ${x5} коп.`)

let n1=2, n2=5, price1=24, price2=37, sum;
sum=n1*price1 + n1*price2;
console.log(sum);

let sum2 = 200;
if (sum2 < 10) {
    sum2=sum2 *30
}else{
    sum2=sum2 -100
}
console.log(sum2)