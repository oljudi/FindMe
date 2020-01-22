images = {
    title: '../images/Credits/titleBlack.png'
}

class Tablero {
    constructor(){
        this.x = 0
        this.y = 640

        this.imgTitle = new Image()
        this.imgTitle.src = images.title
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
        ctx.fillStyle = 'white'
        ctx.font = '30px Georgia'
        ctx.fillText(`Time: ${time}`,1050,680)

    }
}