const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// controladores del juego
let interval
let frames = 0

creditsImages = {
    title: './images/Credits/title.png',
    ironhack: './images/Credits/IronhackWhite.png',
    designed: './images/Credits/designed.png',
    diego: './images/Credits/diego.png',
    olvera: './images/Credits/olvera.png',
    oljudi: './images/Credits/oljudiWhite.png',
    back: './images/Credits/return.png'
}
intsImages = {
    instText: './images/instructions/instText.png',
    arrows: './images/instructions/arrows.png',
    wasd: './images/instructions/wasd.png',
    movement: './images/instructions/movement.png',
    p1: './images/instructions/P1.png',
    p2: './images/instructions/P2.png',
    finda: './images/instructions/findA.png',
    toopen: './images/instructions/toopena.png',
    key: './images/instructions/key.png',
    door: './images/instructions/door.png',
    teamMate: './images/instructions/findYourTeammate.png',
    dealWhitit: './images/instructions/dealWhitIt.png',
    win: './images/instructions/win.png',
    enter: './images/instructions/enterVector.png',
    start: './images/instructions/start.png',
    keyR: './images/instructions/keyboard_key_r.png'
}


class Lobby {
    constructor(){
        this.width = canvas.width
        this.height = canvas.height
        
        this.imgBg = new Image()
        this.imgBg.src = './images/background/lobby1.jpg'
        this.imgStrt = new Image()
        this.imgStrt.src = './images/background/strtGame.png'
        this.imgCredits = new Image()
        this.imgCredits.src = './images/background/credits.png'
        this.imgTitle = new Image()
        this.imgTitle.src = './images/background/title.png'
        
        this.imgDesigned = new Image()
        this.imgDesigned.src = creditsImages.designed
        this.imgOljudi = new Image()
        this.imgOljudi.src = creditsImages.oljudi
        this.imgDiego = new Image()
        this.imgDiego.src = creditsImages.diego
        this.imgOlvera = new Image()
        this.imgOlvera.src = creditsImages.olvera
        this.imgIronhack = new Image()
        this.imgIronhack.src = creditsImages.ironhack
        this.imgReturn = new Image()
        this.imgReturn.src = creditsImages.back

    }
    draw(){
        ctx.drawImage( // Imprime el fondo
            this.imgBg,
            0,
            0,
            this.imgBg.width,
            this.imgBg.height
        )
        ctx.drawImage(
            this.imgTitle,
            300,
            100,
            this.imgTitle.width,
            this.imgTitle.height
        )
        ctx.drawImage( // Imprime Start Button
            this.imgStrt,
            20,
            350,
            this.imgStrt.width,
            this.imgStrt.height
        )
        ctx.drawImage( // Imprime Credits Button
            this.imgCredits,
            20,
            440,
            this.imgCredits.width,
            this.imgCredits.height
        )        
    }
    drawCredits(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage( // Imprime el fondo
            this.imgBg,
            0,
            0,
            this.imgBg.width,
            this.imgBg.height
        )
        ctx.drawImage( // Imprime el titulo
            this.imgTitle,
            300,
            100,
            this.imgTitle.width,
            this.imgTitle.height
        )
        ctx.drawImage( // Imprime Ironhack
            this.imgIronhack,
            50,
            550,
            this.imgIronhack.width,
            this.imgIronhack.height
        )
        ctx.drawImage(// Imprime designed by
            this.imgDesigned,
            600,
            530,
            this.imgDesigned.width,
            this.imgDesigned.height
        )
        ctx.drawImage( //draw Oljudi
            this.imgOljudi,
            600,
            600,
            this.imgOljudi.width,
            this.imgOljudi.height
        )
        ctx.drawImage( //draw Diego
            this.imgDiego,
            800,
            600,
            this.imgDiego.width,
            this.imgDiego.height
        )
        ctx.drawImage( //draw Olvera
            this.imgOlvera,
            950,
            600,
            this.imgOlvera.width,
            this.imgOlvera.height
        )
        ctx.drawImage(
            this.imgReturn,
            1100,
            680,
            this.imgReturn.width,
            this.imgReturn.height
        )
    }
}

class Instructions {
    constructor(){
        this.imgArrows = new Image()
        this.imgArrows.src = intsImages.arrows
        this.imgWasd = new Image()
        this.imgWasd.src = intsImages.wasd
        this.imgInstText = new Image()
        this.imgInstText.src = intsImages.instText
        this.imgMovement = new Image()
        this.imgMovement.src = intsImages.movement
        this.imgP1 = new Image()
        this.imgP1.src = intsImages.p1
        this.imgP2 = new Image()
        this.imgP2.src = intsImages.p2
        this.imgFindA = new Image()
        this.imgFindA.src = intsImages.finda
        this.imgToOpen = new Image()
        this.imgToOpen.src = intsImages.toopen
        this.imgKey = new Image()
        this.imgKey.src = intsImages.key
        this.imgDoor = new Image()
        this.imgDoor.src = intsImages.door
        this.imgFindYourTM = new Image()
        this.imgFindYourTM.src = intsImages.teamMate
        this.imgDeal = new Image()
        this.imgDeal.src = intsImages.dealWhitit
        this.imgWin = new Image()
        this.imgWin.src = intsImages.win
        this.imgReturn = new Image()
        this.imgReturn.src = creditsImages.back
        this.imgEnter = new Image()
        this.imgEnter.src = intsImages.enter
        this.imgStart = new Image()
        this.imgStart.src = intsImages.start
        this.imgKeyR = new Image()
        this.imgKeyR.src = intsImages.keyR
    }
    drawInst(){
        ctx.drawImage( // draw instructions Text
            this.imgInstText,
            380,
            20,
            this.imgInstText.width,
            this.imgInstText.height
        )
        ctx.drawImage( // draw movement title
            this.imgMovement,
            400,
            90,
            this.imgMovement.width,
            this.imgMovement.height
        )
        ctx.drawImage( // draw Arrows
            this.imgArrows,
            400,
            100,
            this.imgArrows.width,
            this.imgArrows.height
        )
        ctx.drawImage( // draw WASD
            this.imgWasd,
            400,
            250,
            this.imgArrows.width,
            this.imgArrows.height
        )
        ctx.drawImage( // draw P1 
            this.imgP1,
            100,
            200,
            this.imgP1.width,
            this.imgP1.height
        )
        ctx.drawImage( // draw P2 
            this.imgP2,
            100,
            350,
            this.imgP2.width,
            this.imgP2.height
        )
        ctx.drawImage( // Find A
            this.imgFindA,
            800,
            90,
            this.imgFindA.width,
            this.imgFindA.height
        )
        ctx.drawImage( // Find a Key
            this.imgKey,
            800,
            150,
            100,
            50
        )
        ctx.drawImage( // To Open
            this.imgToOpen,
            800,
            250,
            this.imgToOpen.width,
            this.imgToOpen.height
        )
        ctx.drawImage( // a Door
            this.imgDoor,
            820,
            300,
            100,
            100
        )
        ctx.drawImage( // Find your teamMate
            this.imgFindYourTM,
            10,
            450,
            this.imgFindYourTM.width,
            this.imgFindYourTM.height
        )
        ctx.drawImage(// draw dealWhitIt
            this.imgDeal,
            450,
            450,
            300,
            300
        )
        ctx.drawImage(// draw dealWhitIt
            this.imgWin,
            520,
            520,
            150,
            150
        )
        ctx.drawImage(
            this.imgKeyR,
            40,
            580,
            this.imgKeyR.width,
            this.imgKeyR.height
        )
        ctx.drawImage( // draw Return
            this.imgReturn,
            30,
            650,
            this.imgReturn.width,
            this.imgReturn.height
        )
        ctx.drawImage( // draw enter
            this.imgEnter,
            1090,
            540,
            100,
            100
        )
        ctx.drawImage( // draw START
            this.imgStart,
            1080,
            650,
            this.imgStart.width,
            this.imgStart.height
        )
    }
}

class Maze {
    constructor(){
        this.x = 10,
        this.y = 10,
        this.width = canvas.width - 20,
        this.height = canvas.height -20
    }
    drawMaze(lvl){
        if (lvl === 1) this.drawLVL1()
        if (lvl === 2) this.drawLVL2()
        if (lvl === 3) this.drawLVL3()
    }
    drawLVL1(){

    }
}


// clases a llamar

const lobby = new Lobby()
const inst = new Instructions()
const maze = new Maze()
// const player1 = new Player()
// const player2 = new Player()


function startGame(){
    if(interval) return
    interval = setInterval(
        update,
        1000/60
    )
}

function starLobby(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    lobby.draw()
    document.onkeydown = e => {
        switch(e.keyCode){
            case 83: // [S]tart Game
                instructions()
                break;
            case 67: // [C]redits
                lobby.drawCredits()
                break;
            case 82: // [R]eturn Lobby
                starLobby()
                break;
        }
    }
}

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

function update() {
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = 'whitesmoke'
    ctx.fillRect(10,10,canvas.width - 20, canvas.height - 20)
}

window.onload = () => {
    starLobby()
}
