const sprites = {
    p1: '../images/sprites/character1.png',
    p2: '../images/sprites/character2.png',
    marioGlobal: '../images/sprites/globalMario.png'
}

class Character { // Cambia esta clase para que sea la misma y solo se pase de mas el parametro de posicion
    constructor(type, x, y){
        this.type = type
        this.x = x
        this.y = y

        this.width = 40
        this.height = 40

        this.sx1 = 123
        this.sy1 = 203
        this.sWidth1 = 20
        this.sHeight1 = 30

        this.sx2 = 123
        this.sy2 = 1038
        this.sWidth2 = 20
        this.sHeight2 = 30

        this.imgPlayer1 = new Image()
        this.imgPlayer1.src = sprites.marioGlobal

        this.imgPlayer2 = new Image()
        this.imgPlayer2.src = sprites.marioGlobal
    }
    draw(){
        if(this.type === 1){ // dibuja player 1
            ctx.drawImage(
                this.imgPlayer1,
                this.sx1,
                this.sy1,
                20,
                30,
                this.x,
                this.y,
                this.width,
                this.height
            )
        } else if(this.type === 2){
            ctx.drawImage(
                this.imgPlayer2,
                this.sx2,
                this.sy2,
                this.sWidth2,
                this.sHeight2,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
    }
    goRight(player) {
        if (this.x > canvas.width - 60) return // no te salgas a la derecha
        this.x += 10
        this.move(player)
      }
      goLeft(player) {
        if (this.x < 30) return // no te salgas a la izquierda
        this.x -= 10
        this.move(player)
      }
      goUp(player) {
        if (this.y < 30) return // no te salgas arriba
        this.y -= 10
        this.move(player)
      } 
      goDown(player) {
        if (this.y > canvas.height - 85) return // no te salgas a la derecha
        this.y += 10
        this.move(player)
      }
      move(player){
          if(player === 1){
            if(this.sx1 >= 170) this.sx1 = 123 
            this.sx1 += 40
          }
          if(this.sx2 >= 170) this.sx2 = 123 
          this.sx2 += 40
      }
      dontGoOverTheWall(pared){
        return(
          this.x < pared.x + pared.width &&
          this.x + this.width > pared.x &&
          this.y < pared.y + pared.height &&
          this.y + this.height > pared.y
        )
      }
      collisionCheck(platform) {
        var vectorX = this.x + this.width / 2 - (platform.x + platform.width / 2);
        var vectorY = this.y + this.height / 2 - (platform.y + platform.height / 2);
    
        var halfWidths = this.width / 2 + platform.width / 2;
        var halfHeights = this.height / 2 + platform.height / 2;
    
        var collisionDirection = null;
    
        if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
          var offsetX = halfWidths - Math.abs(vectorX);
          var offsetY = halfHeights - Math.abs(vectorY);
          if (offsetX < offsetY) {
            if (vectorX > 0) {
              collisionDirection = "left";
              this.x += offsetX;
            } else {
              collisionDirection = "right";
              this.x -= offsetX;
            }
          } else {
            if (vectorY > 0) {
              collisionDirection = "top";
              this.y += offsetY;
            } else {
              collisionDirection = "bottom";
              this.y -= offsetY;
            }
          }
        }
      }
}