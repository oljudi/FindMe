const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// controladores del juego
let interval
let frames = 0

const paredesAf = []
// niveles

const nivel0 = [ // 16X28
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

const nivel1 = [ // 16X28
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1],
    [1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1],
    [1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1],
    [1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1],
    [1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1],
    [1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1],
    [1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

// clases a llamar
const welcome = new Lobby()
const inst = new Instructions()
const player1 = new Character(1, 10, 62)
const player2 = new Character(2, 10, 555)
const maze = new Maze()


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

function drawMaze(){
    maze.drawNivel(nivel1)
}

function checkWall(){
    paredesAf.forEach(platform => {
        player1.collisionCheck(platform);
        player2.collisionCheck(platform);    
        // if (direction == "left" || direction == "right") {
        //     console.log('choque de lado');
        // } else if (direction == "bottom") {
        //     console.log('choque por abajo');
        // } else if (direction == "top") {
        //     console.log('choque por abajo');
        // }
      });
}

//Jugar con esto
// TODO: Mejorar las animaciones de los Sprites
// Issue: No se puede interactuar con los dos personajes al mismo tiempo
// Checar Colision entre los jugadores (WIN CASE) poner un timer (LOSE CASE)

function update() {
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawMaze()
    player1.draw()
    player2.draw()
    checkWall() // hacer solido el laberinto
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

