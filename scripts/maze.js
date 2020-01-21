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
    drawLVL1(){
        //linea 1
        this.drawBlockHorizontal(13,25,40)
        this.drawBlockHorizontal(1,25,600)
        //linea 2
        this.drawBlockHorizontal(13,65,40)
        this.drawBlockHorizontal(1,65,600)
        //linea 3
        this.drawBlockHorizontal(1,105,280)
        this.drawBlockHorizontal(1,105,600)
        //linea 4
        this.drawBlockHorizontal(5,145,0)
        this.drawBlockHorizontal(3,145,240)
        this.drawBlockHorizontal(6,145,400)
        //linea 5
        this.drawBlockHorizontal(4,185,0)
        this.drawBlockHorizontal(3,185,240)
        this.drawBlockHorizontal(5,185,440)
        //linea 6
        this.drawBlockHorizontal(1,225,0)
        this.drawBlockHorizontal(5,225,200)
        this.drawBlockHorizontal(1,225,600)
        //linea 7
        this.drawBlockHorizontal(1,265,0)
        this.drawBlockHorizontal(2,265,80)
        this.drawBlockHorizontal(1,265,280)
        this.drawBlockHorizontal(3,265,440)
        this.drawBlockHorizontal(1,265,600)
        //linea 8
        this.drawBlockHorizontal(1,305,0)
        this.drawBlockHorizontal(2,305,80)
        this.drawBlockHorizontal(1,305,200)
        this.drawBlockHorizontal(3,305,280)
        this.drawBlockHorizontal(1,305,600)
        // linea 9
        this.drawBlockHorizontal(1,345,0)
        this.drawBlockHorizontal(2,345,80)
        this.drawBlockHorizontal(5,345,280)
        this.drawBlockHorizontal(3,345,520)
        // linea 10
        this.drawBlockHorizontal(1,385,0)
        this.drawBlockHorizontal(4,385,80)
        this.drawBlockHorizontal(2,385,400)
        this.drawBlockHorizontal(1,385,600)
        // linea 9
        this.drawBlockHorizontal(1,425,0)
        this.drawBlockHorizontal(5,425,80)
        this.drawBlockHorizontal(1,425,320)
        this.drawBlockHorizontal(4,425,400)
        this.drawBlockHorizontal(1,425,600)
        // linea 10
        this.drawBlockHorizontal(1,465,0)
        this.drawBlockHorizontal(1,465,240)
        this.drawBlockHorizontal(1,465,400)
        this.drawBlockHorizontal(1,465,600)
        //linea 11
        this.drawBlockHorizontal(1,505,0)
        this.drawBlockHorizontal(1,505,80)
        this.drawBlockHorizontal(1,505,160)
        this.drawBlockHorizontal(5,505,240)
        this.drawBlockHorizontal(2,505,480)
        this.drawBlockHorizontal(1,505,600)
        // linea 12
        this.drawBlockHorizontal(1,545,0)
        this.drawBlockHorizontal(5,545,240)
        this.drawBlockHorizontal(1,545,600)
        // linea 13 
        this.drawBlockHorizontal(1,585,0)
        this.drawBlockHorizontal(3,585,80)
        this.drawBlockHorizontal(1,585,240)
        this.drawBlockHorizontal(1,585,400)
        this.drawBlockHorizontal(2,585,480)
        this.drawBlockHorizontal(1,585,600)
        //linea 14
        this.drawBlockHorizontal(1,625,0)
        this.drawBlockHorizontal(3,625,80)
        this.drawBlockHorizontal(1,625,240)
        this.drawBlockHorizontal(1,625,320)
        this.drawBlockHorizontal(1,625,400)
        this.drawBlockHorizontal(1,625,600)
        //linea 15
        this.drawBlockHorizontal(1,665,0)
        this.drawBlockHorizontal(3,665,80)
        this.drawBlockHorizontal(1,665,240)
        this.drawBlockHorizontal(1,665,320)
        this.drawBlockHorizontal(1,665,400)
        this.drawBlockHorizontal(2,665,480)
        this.drawBlockHorizontal(1,665,600)
        //linea 16
        this.drawBlockHorizontal(1,705,0)
        this.drawBlockHorizontal(3,705,80)
        this.drawBlockHorizontal(1,705,240)
        this.drawBlockHorizontal(1,705,320)
        this.drawBlockHorizontal(1,705,400)
        this.drawBlockHorizontal(1,705,600)
        //linea 17
        this.drawBlockHorizontal(1,745,0)
        this.drawBlockHorizontal(3,745,80)
        this.drawBlockHorizontal(1,745,240)
        this.drawBlockHorizontal(1,745,320)
        this.drawBlockHorizontal(1,745,400)
        this.drawBlockHorizontal(2,745,480)
        this.drawBlockHorizontal(1,745,600)
        //linea 18
        this.drawBlockHorizontal(1,785,0)
        this.drawBlockHorizontal(3,785,80)
        this.drawBlockHorizontal(1,785,240)
        this.drawBlockHorizontal(1,785,320)
        this.drawBlockHorizontal(1,785,400)
        this.drawBlockHorizontal(1,785,600)
    }

    drawBlockHorizontal(number, x, y){
        for(let i = 0; i < number; i++){
            ctx.drawImage(
                this.imgBlock,
                this.sxBlock,
                this.syBlock,
                this.sWidthBlock,
                this.sHeightBlock,
                x, //posicion donde inicia x
                y += 40, //posicion donde incia y
                this.block,
                this.block
            )
        }
    }
    drawBlockVertical(number, x, y){
        for(let i = 0; i < number; i++){
            ctx.drawImage(
                this.imgBlock,
                this.sxBlock,
                this.syBlock,
                this.sWidthBlock,
                this.sHeightBlock,
                x += 40, //posicion donde inicia x
                y, //posicion donde incia y
                this.block,
                this.block
            )
        } 
    }
}