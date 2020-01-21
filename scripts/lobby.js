creditsImages = {
    title: './images/Credits/title.png',
    ironhack: './images/Credits/IronhackWhite.png',
    designed: './images/Credits/designed.png',
    diego: './images/Credits/diego.png',
    olvera: './images/Credits/olvera.png',
    oljudi: './images/Credits/oljudiWhite.png',
    back: './images/Credits/return.png'
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