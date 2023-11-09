// var month = prompt("enter month")
// switch (month){
//     case "december" :
//     case "january" :
//     case "february" :
//         alert("winter")
//         break
//     case "march" :
//     case "april" :
//     case "may" :
//         alert ("spring")
//         break
//     case "june" :
//     case "july" :
//     case "august" :
//         alert ("summer")
//         break
//     case "september" :
//     case "october" :
//     case "november" :
//         alert ("autumn")
//         break
//     default :
//         alert ("Доступны только четыре сезона года")
// }

var array = [[[[[[[[[[[2]]]]]]]]]]]
console.log(array[0][0][0][0][0][0][0][0][0][0][0])

var num1 = Number(prompt("Введите первое число"))
var num2 = Number(prompt("Введите второе число"))
var operation = prompt("Введите действие (+ , - , * , / )")
var result
switch (operation) {
    case "+" :
      result =  num1 + num2
        break
    case "-" :
        result =  num1 - num2
        break
    case "*" :
        result =  num1 * num2
        break
    case "/" :
        if (num2 === 0) {
            alert("На 0 делить нельзя ")
        } else {
            result = num1 / num2
        }
        break
    default :
        alert("Некорректоное действие")
}

if(result !== undefined){
    alert(result)
}
