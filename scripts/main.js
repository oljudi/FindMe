const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// controladores del juego
let interval
let frames = 0

// clases a llamar
const welcome = new Lobby()
const inst = new Instructions()
const player1 = new Character(1, 20, 35)
const player2 = new Character(2, 20, 590)
const maze = new Maze(1)


// Ya funciona
function startGame(){
    if(interval) return
    interval = setInterval(
        update,
        1000/60
    )
}

// Ya Funciona
function starLobby(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    welcome.draw()
    document.onkeydown = e => {
        switch(e.keyCode){
            case 83: // [S]tart Game
                instructions()
                break;
            case 67: // [C]redits
                welcome.drawCredits()
                break;
            case 82: // [R]eturn Lobby
                starLobby()
                break;
        }
    }
}

//Ya Funciona
function instructions() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    inst.drawInst()
    document.onkeydown = e => {
        switch (e.keyCode) {
            case 13:
                startGame()
                break;
            case 82:
                starLobby()
                break;  
        }
    }
}

//Jugar con esto
// TODO: Falta imprimir los personajes van a ser 2 // Empieza con esto
// Issue: No se puede interactuar con los dos personajes al mismo tiempo
// Issue: El personaje 2 al parecer esta en un canvas mas abajo :V
// Falta imprimir el laberinto LVL1
// Checar Colisiones y que respete la forma del laberinto
function update() {
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    maze.drawMaze()
    player1.draw()
    player2.draw()
}


// Recibe los parametros del teclado para hacer el movimiento del personaje
document.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 39:
            return player1.goRight(1)
    
        case 38:
            return player1.goUp(1)
    
        case 37:
            return player1.goLeft(1)
    
        case 40:
            return player1.goDown(1)

        case 68:
            return player2.goRight(2)
    
        case 87:
            return player2.goUp(2)
    
        case 65:
            return player2.goLeft(2)
    
        case 83:
            return player2.goDown(2)
    }
  })

//Ya funciona
window.onload = () => {
    starLobby()
}

