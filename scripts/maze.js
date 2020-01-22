blocks = {
    block: '../images/sprites/blocks.png',
}

class Maze {
    constructor(){
        this.x = 10
        this.y = 10
        this.width = canvas.width - 20
        this.height = canvas.height -20

        this.sxBlock = 0
        this.syBlock = 0
        this.sWidthBlock = 70
        this.sHeightBlock = 70
        this.block = 40

        this.imgBlock = new Image()
        this.imgBlock.src = blocks.block
    }
    drawNivel (nivel){
        let a = 0
        let b = 0
        for(let y=0; y < nivel.length; y++){
            for(let x=0; x < nivel[y].length; x++){
                if(nivel[y][x] === 1){
                    this.drawBlock(a,b)
                    if(paredesAf.map(e => e.x).indexOf(a) === -1 || paredesAf.map(e => e.y).indexOf(b) === -1){
                        paredesAf.push(new Wall(a,b))
                    }
                }
                if(nivel[y][x] === 0) this.drawHall(a,b)
                a += 40
            }
            a=0
            b += 40
        }
    }
    drawBlock(x,y){
        ctx.drawImage(
            this.imgBlock,
            this.sxBlock,
            this.syBlock,
            this.sWidthBlock,
            this.sHeightBlock,
            x, //posicion donde inicia x
            y, //posicion donde incia y
            this.block,
            this.block
        )
    }
    drawHall(x,y){
        ctx.fillStyle = 'grey'
        ctx.fillRect(
            x,
            y,
            70,
            70
        )
    }
}