class Cell {
    constructor(w,x,y,z){
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    show(){
        if(this.z < 0.3){
            fill(0,0,255);
        } else if (this.z > 0.3 && this.z < 0.6){
            fill(this.z*100,255,0);
        } else {
            fill(255,0,0);
        }
        rect(this.x*this.w, this.y*this.w, this.w, this.w)
    }
}