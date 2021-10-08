import {vec3} from '../util/vec3/vec3.js';

export class sphere{
    constructor(c, radius){
        this.c = c;
        this.radius=radius;
    }
    dist(p){
        vec3.magnitude(vec3.sub(p,this.c))-this.radius;
    }
}