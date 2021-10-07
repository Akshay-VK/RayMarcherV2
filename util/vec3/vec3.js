export class vec3{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    log(){
        console.log(`x: ${this.x},y: ${this.y},z: ${this.z}`)
    }
    get mag(){
        return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
    }
    static magnitude(v){
        return Math.sqrt(v.x*v.x+v.y*v.y+v.z*v.z);
    }
}