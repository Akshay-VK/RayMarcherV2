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
    get magSquared(){
        return this.x*this.x+this.y*this.y+this.z*this.z;
    }
    static magnitudeSquared(v){
        return v.x*v.x+v.y*v.y+v.z*v.z;
    }
    static add(a,b){
        return new vec3(a.x+b.x,a.y+b.y,a.z+b.z);
    }
    static sub(a,b){
        return new vec3(a.x-b.x,a.y-b.y,a.z-b.z);
    }
    static mul(a,b){
        return new vec3(a.x*b.x,a.y*b.y,a.z*b.z);
    }
    static div(a,b){
        return new vec3(a.x/b.x,a.y/b.y,a.z/b.z);
    }
    static max(a,b){
        return new vec3(Math.max(a.x,b.x),Math.max(a.y,b.y),Math.max(a.z,b.z));
    }
    static min(a,b){
        return new vec3(Math.min(a.x,b.x),Math.min(a.y,b.y),Math.min(a.z,b.z));
    }
    static abs(a){
        return new vec3(Math.abs(a.x),Math.abs(a.y),Math.abs(a.z));
    }
    
}