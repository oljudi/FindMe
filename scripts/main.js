const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// controladores del juego
let interval
let frames = 0
let time = 60

let keys = []

const paredesAf = []
const players = []

// niveles

let random = Math.floor(Math.random() * (3 - 1)) + 1;
let fuck = niveles[random]

let randomP1x = Math.floor(Math.random() * (1160 - 0)) + 1;
let randomP1y = Math.floor(Math.random() * (600 - 0)) + 1;

let randomP2x = Math.floor(Math.random() * (1160 - 0)) + 1;
let randomP2y = Math.floor(Math.random() * (600 - 0)) + 1;


// clases a llamar
const welcome = new Lobby()
const inst = new Instructions()
const player1 = new Character(1, randomP1x, randomP1y)
// players.push(player1)
const player2 = new Character(2, randomP2x, randomP2y)
players.push(player2)
const maze = new Maze()
const dialogo = new Tablero()


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
    welcome.audio.play()
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
                inst.audioDoor.play()
                startGame()
                break;
            case 82:
                starLobby()
                break;  
        }
    }
}

function drawMaze(){
    maze.drawNivel(fuck)
    maze.drawBlackout()
    dialogo.draw()
}

function checkWall(){
    paredesAf.forEach(platform => {
        player1.collisionCheck(platform);
        player2.collisionCheck(platform);    
      });
}

function checkWinner(){
    players.forEach(player => {
        var direction = player1.collisionCheckPlayer(player);
        if (direction == "left" || direction == "right") {
            maze.drawWin()
            clearInterval(interval)
        } else if (direction == "bottom") {
            maze.drawWin()
            clearInterval(interval)
        } else if (direction == "top") {
            maze.drawWin()
            clearInterval(interval)
        }
    })
}

function checkLooser(){
    if(time === 0){
        maze.drawLooser()
        clearInterval(interval)
    }
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

    if(keys[82]) location.reload()
}

// TODO: Mejorar las animaciones de los Sprites
// Checar Colision entre los jugadores (WIN CASE) poner un timer (LOSE CASE)

function update() {
    frames++
    if(frames%60 === 1) time--
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawMaze(nivel2)
    player1.draw()
    player2.draw()
    checkKeys()
    checkWall() // hacer solido el laberinto
    checkWinner()
    checkLooser()
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

// Boton para hacer fullscreen
document.querySelector('button').onclick = () => {
    if (canvas.webkitRequestFullScreen) {
      canvas.webkitRequestFullScreen()
    } else {
      canvas.mozRequestFullScreen()
    }
  }
