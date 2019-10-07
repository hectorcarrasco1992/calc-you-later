function calculate(num,num1,operation) {
const realnum = Number(num)
const realnum1 =Number(num1)
let answer = realnum + realnum1

if (operation === '+'){
    answer = realnum + realnum1
}else if (operation === '-'){
    answer = realnum - realnum1
}else if (operation === 'x'){
    answer = realnum * realnum1
}else if (operation === '/'){
    answer = realnum / realnum1
}else if (operation === '%'){
    answer = realnum % realnum1
}else if (operation === 'plus'){
    answer = realnum + realnum1
}else if (operation === 'minus'){
    answer = realnum - realnum1
}else if (operation === 'times'){
    answer = realnum * realnum1
}else if (operation === 'X'){
    answer = realnum * realnum1
}else if (operation === 'modulus'){
    answer = realnum % realnum1
}else if ( operation === 'mod'){
    answer = realnum % realnum1
}
    
else answer = "Sorry, that's not a mathematical operation!"
    return answer
   }




















module.exports = calculate;