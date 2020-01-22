const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// controladores del juego
let interval
let frames = 0

let keys = []

const paredesAf = []
// niveles

const nivel1 = [ // 16X28
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1],
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

function checkKeys(){
    if(keys[38]) player1.goUp()
    if(keys[40]) player1.goDown()
    if(keys[39]) player1.goRight()
    if(keys[37]) player1.goLeft()

    if(keys[87]) player2.goUp()
    if(keys[83]) player2.goDown()
    if(keys[68]) player2.goRight()
    if(keys[65]) player2.goLeft()
}

//Jugar con esto
// TODO: Mejorar las animaciones de los Sprites
// Checar Colision entre los jugadores (WIN CASE) poner un timer (LOSE CASE)

function update() {
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawMaze()
    player1.draw()
    player2.draw()
    checkKeys()
    checkWall() // hacer solido el laberinto
}


// Recibe los parametros del teclado para hacer el movimiento del personaje
document.addEventListener('keydown', ({ keyCode }) => {
    keys[keyCode] = true;
    })
document.addEventListener('keyup', ({ keyCode }) => {
    keys[keyCode] = false;
    })

//Ya funciona
window.onload = () => {
    starLobby()
}
