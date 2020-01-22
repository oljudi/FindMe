const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// controladores del juego
let interval
let frames = 0

const paredesAf = []
// niveles

const nivel0 = [ // 16X28
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
    maze.drawNivel(nivel0)
}

function checkWall(){
    paredesAf.forEach(pared => {
        if(player1.dontGoOverTheWall(pared)){
            console.log('tocando')
        }
    })
}

//Jugar con esto
// TODO: Falta imprimir los personajes van a ser 2 // Impresos con sprites
// Issue: No se puede interactuar con los dos personajes al mismo tiempo
// Checar Colisiones y que respete la forma del laberinto

function update() {
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawMaze()
    player1.draw()
    player2.draw()
    checkWall()
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

//   paredes.push(new Wall(0,0))
// let paredesDf = paredesAf => {
//     return paredesAf.filter((item, index) => {
//         return paredesAf.indexOf(item) >= index
//     })
// }

    // let paredesDf = function (paredesAf) {
    // 	return paredesAf.filter(function(item, index){
    // 		return paredesAf.indexOf(item) >= index;
    // 	});
    // };

  console.log(paredesAf);
  

//Ya funciona
window.onload = () => {
    starLobby()
}

