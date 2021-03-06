export default class Vec3 {

  constructor(x, y, z) {
    this.x = x; this.y = y; this.z = z;
  }

  length() {
    return Math.sqrt(this.lengthSq());
  }

  lengthSq() {
    return this.x*this.x + this.y*this.y + this.z*this.z;
  }

  add(other) {
    return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  subtract(other) {
    return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  scale(scale) {
    return new Vec3(this.x * scale, this.y * scale, this.z * scale);
  }

  normalize() {
    return this.scale(1/this.length());
  }

  resize(size) {
    return this.scale(size / this.length());
  }

  dot(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  cross(other) {
    var z = other.z ? other.z : 0;
    return new Vec3(this.y*z - this.z*other.y, this.z*other.x - this.x*z, this.x*other.y - this.y*other.x);
  }

  arr() {
    return [this.x, this.y, this.z];
  }

}


