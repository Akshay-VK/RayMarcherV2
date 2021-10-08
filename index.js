import { vec3 } from "./util/vec3/vec3.js";
import { sphere } from "./sdf/sphere.js";

var a = new vec3(1,1,0);
var s = new sphere(new vec3(4,5,1));
s.dist(a).log();