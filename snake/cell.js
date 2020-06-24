class Cell {
    constructor(x,y){
        this.pos = new p5.Vector(x, y)
        this.direction = new p5.Vector(0,0)
    }

    updatePosition(){
        this.pos.x += this.direction.x;
        this.pos.y += this.direction.y;
    }

    updateViaCell(cell){
        this.pos.x = cell.pos.x;
        this.pos.y = cell.pos.y;
    }

    collided(cell){
        return this.pos.x === cell.pos.x && this.pos.y === cell.pos.y;
    }
    
    setDirection(x,y){
        this.direction.x = x;
        this.direction.y = y;
    }

}