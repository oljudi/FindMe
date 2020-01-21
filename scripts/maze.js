class Maze {
    constructor(nvl){
        this.lvl = nvl
        this.x = 10,
        this.y = 10,
        this.width = canvas.width - 20,
        this.height = canvas.height -20
    }
    drawMaze(){
        if (this.lvl === 1) this.drawLVL1()
        if (this.lvl === 2) this.drawLVL2()
        if (this.lvl === 3) this.drawLVL3()
    }
    drawLVL1(){

    }
}