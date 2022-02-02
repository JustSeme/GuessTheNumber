//Компьютер загадывает число от 1 до n. У пользователя k попыток отгадать. После каждой неудачной попытки компьютер сообщает меньше или больше загаданное число. В конце игры текст с результатом (или "Вы угадали", или "Попытки закончились")

let attemps = 4

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

const hiddenNum = getRandomInt(1, 10)
let complete = false

function start() {
    while(attemps != 0 & !complete) {
        let gussedNum = prompt(`У тебя ещё ${attemps} попытки`)
        if(gussedNum == hiddenNum) {
            alert('Вы угадали!')
            complete = true
        } else {
            attemps--
            if(hiddenNum > gussedNum) alert('Загаданное число больше')
            if(hiddenNum < gussedNum) alert('Загаданное число меньше')
        }
    }

    if(attemps == 0) {
        alert('Попытки закончились')
    }
}

function trying() {
    if(complete) alert('Но ты уже победил... приза нету...')
    else if(attemps != 0) alert(`У тебя ещё ${attemps} попытки...`)
    else alert('А я хочу себе e-girl, но я же об этом не говорю! Я Компьютер, а не джин, блин')
}