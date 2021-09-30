let order = []
let clickedOrdem = []
let score = 0

// 0 -> verde
// 1 -> vermelho
// 2 -> amarelo
// 3 -> azul

const blue = document.querySelector ('.blue')
const red = document.querySelector (".red")
const green = document.querySelector (".green")
const yellow = document.querySelector (".yellow")

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random () *4)
    order[order.length] = colorOrder
    clickedOrdem = []

    for (let i in order) {
        let elementColor = creatColorElement (order [i])
        lightColor (elementColor, Number(i) + 1 )
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => (
        element.classList.add("selected")
    ), number - 250);
    setTimeout(() => {
        element.classList.remove("selected")
    })
}

let checkOrder = () => {
    for (let i in clickedOrdem) {
        if (clickedOrdem[i] != order[i]) {
            gameOver();
            break
        }
    }
    if (clickedOrdem.length == order.length)  {
alert ("pontuação: " + score + "\nVocê acertou! Iniciando próximo nível!")
    nextLevel();
 }
}
    
let click = (color) => {
    clickedOrdem[clickedOrdem.length] = color
    creatColorElement(color).classList.add ("selected")
        
        setTimeout(() => {
        creatColorElement(color).classList.remove("selected")
        checkOrder()
        },250)

}


let creatColorElement = (color) => {
    if (color ==0) {
        return green
    } else if (color == 1){
        return red
    } else if (color==2) {
        return  yellow
    } else if (color ==3) {
        return blue
    }
}

let nextLevel = () => {
    score++
    shuffleOrder()
}

let gameOver = () => {
    alert("pontuação: " + score + "\nVocê perdeu o jogo!\n Clique em OK para iniciar um novo jogo")
    order = []
    clickedOrdem = []

    playGame()
}

let playGame = () => {
    alert ("Bem vindo ao Gênesis! Iniciando novo jogo!")
    score = 0
    nextLevel()
}

/*green.addEventListener ("click", click (0))
red.addEventListener ("click", click (1))
yellow.addEventListener ("click", click (2))
blue.addEventListener ("click", click (3))*/

green.onclick = () => click(0)
red.onclick = () => click (1)
yellow.onclick = () => click (2)
blue.onclick = () => click (3)

    playGame()