images = {
    title: '../images/Credits/titleBlack.png',
    typeR: '../images/instructions/keyboard_key_r.png'
}

class Tablero {
    constructor(){
        this.x = 0
        this.y = 640

        this.imgTitle = new Image()
        this.imgTitle.src = images.title
        this.imgR = new Image()
        this.imgR.src = images.typeR
    }
    draw(){
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.fillRect(
            0,
            640,
            canvas.width,
            canvas.height-60
        )
        ctx.fillStyle = 'grey'
        ctx.fillRect(
            5,
            650,
            canvas.width-10,
            40
        )
        ctx.drawImage(
            this.imgTitle,
            10,
            660,
            100,
            20
        )
        ctx.drawImage(
            this.imgR,
            900,
            655,
            30,
            30
            )
        ctx.font = '20px Georgia'
        ctx.fillStyle = 'white'
        ctx.fillText(`Press`,850,675)
        ctx.fillText(`to restart`,940,675)
        ctx.font = '30px Georgia'
        ctx.fillText(`Time: ${time}`,1050,680)
    }
}