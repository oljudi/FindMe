blocks = {
    block: '../images/sprites/blocks.png',
}

class Maze {
    constructor(nvl){
        this.lvl = nvl
        this.x = 10
        this.y = 10
        this.width = canvas.width - 20
        this.height = canvas.height -20

        this.sxBlock = 0
        this.syBlock = 0
        this.sWidthBlock = 70
        this.sHeightBlock = 70
        this.block = 40

        this.xBlock = 25
        this.yBlock = 80

        this.sxHall = 0
        this.syHall = 87

        this.imgBlock = new Image()
        this.imgBlock.src = blocks.block
    }
    drawMaze(){
        ctx.fillStyle = 'whitesmoke'
        ctx.fillRect(10,10,this.width, this.height)
        if (this.lvl === 1) this.drawLVL1()
        // if (this.lvl === 2) this.drawLVL2()
        // if (this.lvl === 3) this.drawLVL3()
    }
    drawNivel (nivel){
        let a = 0
        let b = 0
        for(let y=0; y < nivel.length; y++){
            for(let x=0; x < nivel[y].length; x++){
                if(nivel[y][x] === 1)this.drawBlock(a,b)
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