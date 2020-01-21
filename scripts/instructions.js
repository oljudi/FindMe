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

