const sprites = {
    p1: '../images/sprites/character1.png',
    p2: '../images/sprites/character2.png'
}

class Character { // Cambia esta clase para que sea la misma y solo se pase de mas el parametro de posicion
    constructor(c){
        this.type = c
        this.x = 25
        this.y = 25
        this.width = 36
        this.height = 59
        this.sx = 5
        this.sy = 21
        this.imgPlayer1 = new Image()
        this.imgPlayer1.src = sprites.p1
        this.imgPlayer2 = new Image()
        this.imgPlayer2.src = sprites.p2
    }
    draw(){
        if(this.type === 1){ // dibuja player 1
            ctx.drawImage(
                this.imgPlayer1,
                this.sx,
                this.sy,
                19,
                29,
                this.x,
                this.y,
                this.width,
                this.height
            )
        } else if(this.type === 2){
            ctx.drawImage(
                this.imgPlayer2,
                this.sx,
                this.sy,
                19,
                29,
                this.x,
                this.y + 600,
                this.width,
                this.height
            )
        }
    }
    goRight() {
        if (this.x > canvas.width - 85) return // no te salgas a la derecha
        this.x += 3
      }
      goLeft() {
        if (this.x < 30) return // no te salgas a la izquierda
        this.x -= 3
      }
      goUp() {
        if (this.y < 30) return // no te salgas arriba
        this.y -= 3
      } 
      goDown() {
        if (this.y > canvas.height - 85) return // no te salgas a la derecha
        this.y += 3
      }
}